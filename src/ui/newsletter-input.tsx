import { AnimatePresence, motion } from "motion/react";
import { useRef, useState, type KeyboardEvent } from "react";

type Props = {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonLabel?: string;
};

function LoaderIcon({ className = "", size = 14 }: { className?: string; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        animate={{ rotate: 360 }}
        style={{ transformOrigin: "12px 12px" }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8, ease: "linear" }}
      >
        <path d="M12 2v4" />
        <path d="m16.2 7.8 2.9-2.9" />
        <path d="M18 12h4" />
        <path d="m16.2 16.2 2.9 2.9" />
        <path d="M12 18v4" />
        <path d="m4.9 19.1 2.9-2.9" />
        <path d="M2 12h4" />
        <path d="m4.9 4.9 2.9 2.9" />
      </motion.g>
    </svg>
  );
}

export default function NewsletterInput({
  title = "Get updates",
  description = "Fresh UI skills and design engineering notes.",
  placeholder = "Enter your email",
  buttonLabel = "Subscribe",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "subscribing" | "subscribed">("idle");
  const [botField, setBotField] = useState("");
  const [error, setError] = useState("");
  const startedAtRef = useRef(Date.now());

  const submit = async () => {
    if (!email.trim() || status !== "idle") return;

    setError("");
    setStatus("subscribing");

    try {
      const response = await fetch("https://api.interfaceoffice.com/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "ui-skills",
          honeypot: botField,
          startedAt: startedAtRef.current,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setStatus("subscribed");
      setEmail("");

      window.setTimeout(() => {
        setError("");
        setStatus("idle");
      }, 1600);
    } catch {
      setError("Couldn't subscribe right now. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <div className="px-4 pt-16 sm:px-8 sm:pt-20" data-newsletter-widget>
      <hr className="border-parchment-100 mx-auto my-8 w-1/4 border" />
      <div className="mx-auto w-full max-w-3xl">
        <div className="max-w-xl">
          <h2 className="text-parchment-900 text-lg font-medium tracking-tight text-balance sm:text-xl">
            {title}
          </h2>
          <p className="text-parchment-600 mt-2 max-w-lg text-sm leading-6 text-pretty sm:text-[15px]">
            {description}
          </p>
        </div>

        <div className="mt-5">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>

          <div className="relative">
            <input
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              name="website"
              value={botField}
              onChange={(event) => setBotField(event.target.value)}
              className="pointer-events-none absolute inset-0 -z-10 h-0 w-0 opacity-0"
            />

            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={placeholder}
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (error) setError("");
              }}
              disabled={status !== "idle"}
              aria-invalid={error ? "true" : "false"}
              onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  void submit();
                }
              }}
              className="text-parchment-900 placeholder:text-parchment-400 focus:border-parchment-300 relative z-0 h-12 w-full rounded-[12px] bg-white px-4 pr-36 text-sm shadow-2xs ring-1 ring-black/10 transition-colors outline-none"
            />

            <button
              type="button"
              disabled={status !== "idle"}
              onClick={() => void submit()}
              className={`bg-parchment-900 text-parchment-50 hover:bg-parchment-800 focus-visible:outline-primary absolute top-1/2 right-1 z-10 inline-flex h-10 min-w-[112px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-[10px] px-3.5 text-sm font-medium transition-[opacity,background-color] duration-150 ease-out focus-visible:outline focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:hover:bg-parchment-900 ${status === "subscribing" ? "opacity-70" : "opacity-100"
                }`}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {status === "idle" ? (
                  <motion.span
                    key="idle-label"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.14, ease: "easeOut" }}
                    className="pointer-events-none inline-flex items-center whitespace-nowrap"
                  >
                    {buttonLabel}
                  </motion.span>
                ) : null}

                {status === "subscribing" ? (
                  <motion.span
                    key="loading-icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.14, ease: "easeOut" }}
                    className="pointer-events-none inline-flex items-center whitespace-nowrap"
                  >
                    <LoaderIcon />
                  </motion.span>
                ) : null}

                {status === "subscribed" ? (
                  <motion.span
                    key="success-icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.14, ease: "easeOut" }}
                    className="pointer-events-none inline-flex items-center whitespace-nowrap"
                  >
                    <svg
                      aria-hidden="true"
                      className="size-4 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </motion.span>
                ) : null}
              </AnimatePresence>
            </button>
          </div>

          {error ? (
            <p className="text-red-700 mt-2 text-sm" role="alert">
              {error}
            </p>
          ) : null}
        </div>
      </div>
      <hr className="border-parchment-100 mx-auto my-8 w-1/4 border" />
    </div>
  );
}
