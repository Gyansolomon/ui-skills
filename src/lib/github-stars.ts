type GithubStarsCacheEntry = {
  value: string;
  etag?: string;
  expiresAt: number;
  inFlight?: Promise<void>;
};

type GithubStarsCacheStore = Map<string, GithubStarsCacheEntry>;

const DEFAULT_TTL_MS = 15 * 60 * 1000;

const globalStore = globalThis as typeof globalThis & {
  __uiSkillsGithubStarsCache?: GithubStarsCacheStore;
};

const cacheStore: GithubStarsCacheStore =
  globalStore.__uiSkillsGithubStarsCache ??
  (globalStore.__uiSkillsGithubStarsCache = new Map());

const parseMaxAge = (cacheControl: string | null) => {
  if (!cacheControl) return null;

  const match = cacheControl.match(/(?:s-maxage|max-age)=(\d+)/i);
  if (!match) return null;

  const seconds = Number(match[1]);
  if (!Number.isFinite(seconds) || seconds <= 0) return null;

  return seconds * 1000;
};

const formatStars = (value: number) => new Intl.NumberFormat("en-US").format(value);

export const getGithubStars = async (
  repo: string,
  fallback: string,
): Promise<string> => {
  const now = Date.now();
  const entry = cacheStore.get(repo);

  const refresh = async () => {
    const current = cacheStore.get(repo);

    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
    };

    if (current?.etag) {
      headers["If-None-Match"] = current.etag;
    }

    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers,
    });

    const ttl = parseMaxAge(response.headers.get("cache-control")) ?? DEFAULT_TTL_MS;

    if (response.status === 304 && current) {
      cacheStore.set(repo, {
        ...current,
        expiresAt: Date.now() + ttl,
      });
      return;
    }

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    const data = await response.json();
    const stars = typeof data?.stargazers_count === "number" ? data.stargazers_count : null;

    if (stars === null) {
      throw new Error("Missing stargazers_count in GitHub response");
    }

    cacheStore.set(repo, {
      value: formatStars(stars),
      etag: response.headers.get("etag") ?? undefined,
      expiresAt: Date.now() + ttl,
    });
  };

  const queueRefresh = () => {
    const current = cacheStore.get(repo);
    if (current?.inFlight) {
      return current.inFlight;
    }

    const inFlight = refresh()
      .catch(() => {
        if (!cacheStore.has(repo)) {
          cacheStore.set(repo, {
            value: fallback,
            expiresAt: Date.now() + DEFAULT_TTL_MS,
          });
        }
      })
      .finally(() => {
        const latest = cacheStore.get(repo);
        if (latest) {
          delete latest.inFlight;
          cacheStore.set(repo, latest);
        }
      });

    cacheStore.set(repo, {
      value: current?.value ?? fallback,
      etag: current?.etag,
      expiresAt: current?.expiresAt ?? 0,
      inFlight,
    });

    return inFlight;
  };

  if (entry && now < entry.expiresAt) {
    return entry.value;
  }

  if (entry) {
    void queueRefresh();
    return entry.value;
  }

  await queueRefresh();
  return cacheStore.get(repo)?.value ?? fallback;
};
