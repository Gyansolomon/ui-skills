export type RegistrySkill = {
  slug: string;
  pathSlug: string;
  sourceKey: string;
  sourceLabel: string;
  user: string;
  repo: string;
  rawUrl: string;
  githubUrl: string;
  name: string;
  description: string;
};

type RegistrySourceSkill = Omit<
  RegistrySkill,
  "pathSlug" | "sourceKey" | "sourceLabel"
>;

const registrySource: RegistrySourceSkill[] = [
  {
    slug: "frontend-design",
    user: "anthropics",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/anthropics/skills/main/skills/frontend-design/SKILL.md",
    githubUrl:
      "https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md",
    name: "frontend-design",
    description:
      "Create distinctive, production-grade frontend interfaces with high design quality. Generates creative, polished code and UI design that avoids generic AI aesthetics.",
  },
  {
    slug: "web-design-guidelines",
    user: "vercel-labs",
    repo: "agent-skills",
    rawUrl:
      "https://raw.githubusercontent.com/vercel-labs/agent-skills/main/skills/web-design-guidelines/SKILL.md",
    githubUrl:
      "https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md",
    name: "web-design-guidelines",
    description:
      "Review UI code for Web Interface Guidelines compliance. Audit design, accessibility, and UX against Vercel's best practices.",
  },
  {
    slug: "ui-ux-pro-max",
    user: "nextlevelbuilder",
    repo: "ui-ux-pro-max-skill",
    rawUrl:
      "https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/.claude/skills/ui-ux-pro-max/SKILL.md",
    githubUrl:
      "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md",
    name: "ui-ux-pro-max",
    description:
      "Comprehensive UI/UX design intelligence with 50+ styles, 97 palettes, and 9 technology stacks for building professional interfaces.",
  },
  {
    slug: "interaction-design",
    user: "wshobson",
    repo: "agents",
    rawUrl:
      "https://raw.githubusercontent.com/wshobson/agents/main/plugins/ui-design/skills/interaction-design/SKILL.md",
    githubUrl:
      "https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/interaction-design/SKILL.md",
    name: "interaction-design",
    description:
      "Design and implement microinteractions, motion design, transitions, and user feedback patterns for delightful user experiences.",
  },
  {
    slug: "swiftui-ui-patterns",
    user: "dimillian",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/dimillian/skills/main/swiftui-ui-patterns/SKILL.md",
    githubUrl:
      "https://github.com/dimillian/skills/blob/main/swiftui-ui-patterns/SKILL.md",
    name: "swiftui-ui-patterns",
    description:
      "Best practices and example-driven guidance for building SwiftUI views and components. Includes tab architecture and screen composition.",
  },
  {
    slug: "interface-design",
    user: "Dammyjay93",
    repo: "interface-design",
    rawUrl:
      "https://raw.githubusercontent.com/Dammyjay93/interface-design/main/.claude/skills/interface-design/SKILL.md",
    githubUrl:
      "https://github.com/Dammyjay93/interface-design/blob/main/.claude/skills/interface-design/SKILL.md",
    name: "interface-design",
    description:
      "Specialized skill for interface design: dashboards, admin panels, and SaaS apps. Focused on craft and consistency.",
  },
  {
    slug: "wcag-audit-patterns",
    user: "wshobson",
    repo: "agents",
    rawUrl:
      "https://raw.githubusercontent.com/wshobson/agents/main/plugins/accessibility-compliance/skills/wcag-audit-patterns/SKILL.md",
    githubUrl:
      "https://github.com/wshobson/agents/blob/main/plugins/accessibility-compliance/skills/wcag-audit-patterns/SKILL.md",
    name: "wcag-audit-patterns",
    description:
      "Conduct WCAG 2.2 accessibility audits with automated testing, manual verification, and remediation guidance. Use when auditing websites for accessibility, fixing WCAG violations, or implementing accessible design patterns.",
  },
  {
    slug: "canvas-design",
    user: "anthropics",
    repo: "skills",
    rawUrl:
      "https://raw.githubusercontent.com/anthropics/skills/main/skills/canvas-design/SKILL.md",
    githubUrl:
      "https://github.com/anthropics/skills/blob/main/skills/canvas-design/SKILL.md",
    name: "canvas-design",
    description:
      "Create original visual designs and art on digital canvases using design philosophy, focusing on form, space, and color.",
  },
  {
    slug: "12-principles-of-animation",
    user: "raphaelsalaja",
    repo: "skill",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/skill/main/skills/12-principles-of-animation/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/skill/blob/main/skills/12-principles-of-animation/SKILL.md",
    name: "12-principles-of-animation",
    description:
      "Apply Disney's 12 animation principles to web interfaces to make motion feel natural, organic, and human.",
  },
  {
    slug: "design-lab",
    user: "0xdesign",
    repo: "design-plugin",
    rawUrl:
      "https://raw.githubusercontent.com/0xdesign/design-plugin/main/design-and-refine/skills/design-lab/SKILL.md",
    githubUrl:
      "https://github.com/0xdesign/design-plugin/blob/main/design-and-refine/skills/design-lab/SKILL.md",
    name: "design-lab",
    description:
      "Interactive design exploration workflow: conduct interviews, generate variants, and refine UI designs through feedback.",
  },
  {
    slug: "make-interfaces-feel-better",
    user: "jakubkrehel",
    repo: "make-interfaces-feel-better",
    rawUrl:
      "https://raw.githubusercontent.com/jakubkrehel/make-interfaces-feel-better/main/skills/make-interfaces-feel-better/SKILL.md",
    githubUrl:
      "https://github.com/jakubkrehel/make-interfaces-feel-better/blob/main/skills/make-interfaces-feel-better/SKILL.md",
    name: "make-interfaces-feel-better",
    description:
      "Design engineering principles for making interfaces feel polished, with focus on micro-interactions, typography, and visual details.",
  },
  {
    slug: "rams",
    user: "rams",
    repo: "rams-ai",
    rawUrl: "https://www.rams.ai/rams.md",
    githubUrl: "",
    name: "rams",
    description:
      "Real-time design feedback skill focused on accessibility, spacing, typography, contrast, and component quality.",
  },
  {
    slug: "bencium-innovative-ux-designer",
    user: "bencium",
    repo: "bencium-marketplace",
    rawUrl:
      "https://raw.githubusercontent.com/bencium/bencium-marketplace/main/bencium-innovative-ux-designer/skills/bencium-innovative-ux-designer/SKILL.md",
    githubUrl:
      "https://github.com/bencium/bencium-marketplace/blob/main/bencium-innovative-ux-designer/skills/bencium-innovative-ux-designer/SKILL.md",
    name: "bencium-innovative-ux-designer",
    description:
      "Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.",
  },
  {
    slug: "contrast-checker",
    user: "AccessLint",
    repo: "claude-marketplace",
    rawUrl:
      "https://raw.githubusercontent.com/AccessLint/claude-marketplace/main/plugins/accesslint/skills/contrast-checker/SKILL.md",
    githubUrl:
      "https://github.com/AccessLint/claude-marketplace/blob/main/plugins/accesslint/skills/contrast-checker/SKILL.md",
    name: "contrast-checker",
    description:
      "Color contrast analyzer for WCAG compliance. Calculates contrast ratios, identifies violations, and suggests accessible color alternatives.",
  },
  {
    slug: "link-purpose",
    user: "AccessLint",
    repo: "claude-marketplace",
    rawUrl:
      "https://raw.githubusercontent.com/AccessLint/claude-marketplace/main/plugins/accesslint/skills/link-purpose/SKILL.md",
    githubUrl:
      "https://github.com/AccessLint/claude-marketplace/blob/main/plugins/accesslint/skills/link-purpose/SKILL.md",
    name: "link-purpose",
    description:
      "Analyze and improve WCAG 2.4.4 link purpose compliance by fixing generic and ambiguous link text.",
  },
  {
    slug: "refactor",
    user: "AccessLint",
    repo: "claude-marketplace",
    rawUrl:
      "https://raw.githubusercontent.com/AccessLint/claude-marketplace/main/plugins/accesslint/skills/refactor/SKILL.md",
    githubUrl:
      "https://github.com/AccessLint/claude-marketplace/blob/main/plugins/accesslint/skills/refactor/SKILL.md",
    name: "refactor",
    description:
      "Accessibility refactoring specialist for systematic WCAG fixes across components and codebases.",
  },
  {
    slug: "use-of-color",
    user: "AccessLint",
    repo: "claude-marketplace",
    rawUrl:
      "https://raw.githubusercontent.com/AccessLint/claude-marketplace/main/plugins/accesslint/skills/use-of-color/SKILL.md",
    githubUrl:
      "https://github.com/AccessLint/claude-marketplace/blob/main/plugins/accesslint/skills/use-of-color/SKILL.md",
    name: "use-of-color",
    description:
      "Analyze and remediate WCAG 1.4.1 use-of-color issues where meaning relies only on color.",
  },
  {
    slug: "emil-design-eng",
    user: "emilkowalski",
    repo: "skill",
    rawUrl:
      "https://raw.githubusercontent.com/emilkowalski/skill/main/skills/emil-design-eng/SKILL.md",
    githubUrl:
      "https://github.com/emilkowalski/skill/blob/main/skills/emil-design-eng/SKILL.md",
    name: "emil-design-eng",
    description:
      "Emil Kowalski's design-engineering philosophy for UI polish, components, animation, and production-ready frontend craft.",
  },
  {
    slug: "generating-sounds-with-ai",
    user: "raphaelsalaja",
    repo: "skill",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/skill/main/skills/generating-sounds-with-ai/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/skill/blob/main/skills/generating-sounds-with-ai/SKILL.md",
    name: "generating-sounds-with-ai",
    description:
      "Audit Web Audio API code for procedural sound synthesis quality, UX decisions, and parameter best practices.",
  },
  {
    slug: "mastering-animate-presence",
    user: "raphaelsalaja",
    repo: "skill",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/skill/main/skills/mastering-animate-presence/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/skill/blob/main/skills/mastering-animate-presence/SKILL.md",
    name: "mastering-animate-presence",
    description:
      "Audit Motion and Framer Motion exit/presence patterns with practical fixes for AnimatePresence usage.",
  },
  {
    slug: "morphing-icons",
    user: "raphaelsalaja",
    repo: "skill",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/skill/main/skills/morphing-icons/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/skill/blob/main/skills/morphing-icons/SKILL.md",
    name: "morphing-icons",
    description:
      "Build icon components that morph between SVG shapes with smooth, line-based transformation.",
  },
  {
    slug: "pseudo-elements",
    user: "raphaelsalaja",
    repo: "skill",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/skill/main/skills/pseudo-elements/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/skill/blob/main/skills/pseudo-elements/SKILL.md",
    name: "pseudo-elements",
    description:
      "Audit CSS pseudo-elements and View Transitions usage for hover effects, decorative layers, and transitions.",
  },
  {
    slug: "sounds-on-the-web",
    user: "raphaelsalaja",
    repo: "skill",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/skill/main/skills/sounds-on-the-web/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/skill/blob/main/skills/sounds-on-the-web/SKILL.md",
    name: "sounds-on-the-web",
    description:
      "Audit interface sound feedback for UX quality, accessibility, and practical implementation patterns.",
  },
  {
    slug: "to-spring-or-not-to-spring",
    user: "raphaelsalaja",
    repo: "skill",
    rawUrl:
      "https://raw.githubusercontent.com/raphaelsalaja/skill/main/skills/to-spring-or-not-to-spring/SKILL.md",
    githubUrl:
      "https://github.com/raphaelsalaja/skill/blob/main/skills/to-spring-or-not-to-spring/SKILL.md",
    name: "to-spring-or-not-to-spring",
    description:
      "Audit animation timing choices to decide when springs versus easing curves produce better motion.",
  },
  {
    slug: "frontend-slides",
    user: "zarazhangrui",
    repo: "frontend-slides",
    rawUrl:
      "https://raw.githubusercontent.com/zarazhangrui/frontend-slides/main/SKILL.md",
    githubUrl:
      "https://github.com/zarazhangrui/frontend-slides/blob/main/SKILL.md",
    name: "frontend-slides",
    description:
      "Create animation-rich HTML presentations from scratch or convert PPT/PPTX files into polished web slides.",
  },
  {
    slug: "shadcn",
    user: "shadcn-ui",
    repo: "ui",
    rawUrl:
      "https://raw.githubusercontent.com/shadcn-ui/ui/main/skills/shadcn/SKILL.md",
    githubUrl:
      "https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/SKILL.md",
    name: "shadcn",
    description:
      "Project-aware shadcn/ui workflow for searching, adding, composing, and fixing components with correct patterns.",
  },
  {
    slug: "brutalist-skill",
    user: "Leonxlnx",
    repo: "taste-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/brutalist-skill/SKILL.md",
    githubUrl:
      "https://github.com/Leonxlnx/taste-skill/blob/main/skills/brutalist-skill/SKILL.md",
    name: "industrial-brutalist-ui",
    description:
      "Raw, mechanical interface direction mixing Swiss print structure with terminal-inspired brutalist aesthetics.",
  },
  {
    slug: "gpt-tasteskill",
    user: "Leonxlnx",
    repo: "taste-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/gpt-tasteskill/SKILL.md",
    githubUrl:
      "https://github.com/Leonxlnx/taste-skill/blob/main/skills/gpt-tasteskill/SKILL.md",
    name: "gpt-taste",
    description:
      "High-agency UX/UI skill with strict layout variance, typography, and GSAP motion engineering constraints.",
  },
  {
    slug: "minimalist-skill",
    user: "Leonxlnx",
    repo: "taste-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/minimalist-skill/SKILL.md",
    githubUrl:
      "https://github.com/Leonxlnx/taste-skill/blob/main/skills/minimalist-skill/SKILL.md",
    name: "minimalist-ui",
    description:
      "Editorial minimal interfaces with monochrome palettes, typographic contrast, and restrained visuals.",
  },
  {
    slug: "output-skill",
    user: "Leonxlnx",
    repo: "taste-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/output-skill/SKILL.md",
    githubUrl:
      "https://github.com/Leonxlnx/taste-skill/blob/main/skills/output-skill/SKILL.md",
    name: "full-output-enforcement",
    description:
      "Enforces complete, non-truncated code output and blocks placeholder or half-finished responses.",
  },
  {
    slug: "redesign-skill",
    user: "Leonxlnx",
    repo: "taste-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/redesign-skill/SKILL.md",
    githubUrl:
      "https://github.com/Leonxlnx/taste-skill/blob/main/skills/redesign-skill/SKILL.md",
    name: "redesign-existing-projects",
    description:
      "Audit and upgrade existing interfaces to premium visual quality while preserving product functionality.",
  },
  {
    slug: "soft-skill",
    user: "Leonxlnx",
    repo: "taste-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/soft-skill/SKILL.md",
    githubUrl:
      "https://github.com/Leonxlnx/taste-skill/blob/main/skills/soft-skill/SKILL.md",
    name: "high-end-visual-design",
    description:
      "High-end visual design guidance for premium typography, spacing, depth, and animation systems.",
  },
  {
    slug: "stitch-skill",
    user: "Leonxlnx",
    repo: "taste-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/stitch-skill/SKILL.md",
    githubUrl:
      "https://github.com/Leonxlnx/taste-skill/blob/main/skills/stitch-skill/SKILL.md",
    name: "stitch-design-taste",
    description:
      "Semantic design-system skill for Google Stitch with strict anti-generic UI generation rules.",
  },
  {
    slug: "taste-skill",
    user: "Leonxlnx",
    repo: "taste-skill",
    rawUrl:
      "https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/taste-skill/SKILL.md",
    githubUrl:
      "https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md",
    name: "design-taste-frontend",
    description:
      "Senior UI/UX frontend skill that enforces anti-slop design decisions, motion quality, and architecture discipline.",
  },
  {
    slug: "adapt",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/adapt/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/adapt/SKILL.md",
    name: "adapt",
    description:
      "Adapt designs across breakpoints, device contexts, and platform constraints with responsive interaction quality.",
  },
  {
    slug: "animate",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/animate/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/animate/SKILL.md",
    name: "animate",
    description:
      "Enhance UX with purposeful animation and micro-interactions that support usability and delight.",
  },
  {
    slug: "audit",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/audit/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/audit/SKILL.md",
    name: "audit",
    description:
      "Run technical UI quality audits across accessibility, performance, theming, responsive behavior, and anti-patterns.",
  },
  {
    slug: "bolder",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/bolder/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/bolder/SKILL.md",
    name: "bolder",
    description:
      "Increase visual impact and personality for interfaces that feel too safe, bland, or generic.",
  },
  {
    slug: "clarify",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/clarify/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/clarify/SKILL.md",
    name: "clarify",
    description:
      "Improve labels, microcopy, and UX messaging so interface text is clearer and easier to act on.",
  },
  {
    slug: "colorize",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/colorize/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/colorize/SKILL.md",
    name: "colorize",
    description:
      "Introduce strategic color systems to interfaces that feel dull, monochrome, or visually flat.",
  },
  {
    slug: "critique",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/critique/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/critique/SKILL.md",
    name: "critique",
    description:
      "Evaluate design quality with structured UX scoring, persona checks, and actionable remediation guidance.",
  },
  {
    slug: "delight",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/delight/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/delight/SKILL.md",
    name: "delight",
    description:
      "Add personality and memorable moments through thoughtful interaction details and emotional UX touches.",
  },
  {
    slug: "distill",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/distill/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/distill/SKILL.md",
    name: "distill",
    description:
      "Simplify noisy interfaces by removing non-essential complexity and restoring clear visual focus.",
  },
  {
    slug: "harden",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/harden/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/harden/SKILL.md",
    name: "harden",
    description:
      "Make interfaces production-ready with robust empty states, edge cases, errors, onboarding, and i18n resilience.",
  },
  {
    slug: "impeccable",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/impeccable/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/impeccable/SKILL.md",
    name: "impeccable",
    description:
      "Flagship design skill for production-grade, anti-generic frontend interfaces with strong craft and consistency.",
  },
  {
    slug: "layout",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/layout/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/layout/SKILL.md",
    name: "layout",
    description:
      "Fix spacing, composition, and hierarchy rhythm when UI layout feels crowded, flat, or misaligned.",
  },
  {
    slug: "optimize",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/optimize/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/optimize/SKILL.md",
    name: "optimize",
    description:
      "Diagnose and improve interface performance across rendering, motion smoothness, assets, and load speed.",
  },
  {
    slug: "overdrive",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/overdrive/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/overdrive/SKILL.md",
    name: "overdrive",
    description:
      "Push interfaces into high-impact territory with advanced animation, shaders, and ambitious interaction systems.",
  },
  {
    slug: "polish",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/polish/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/polish/SKILL.md",
    name: "polish",
    description:
      "Final quality pass for spacing, alignment, and consistency to prepare UI for launch.",
  },
  {
    slug: "quieter",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/quieter/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/quieter/SKILL.md",
    name: "quieter",
    description:
      "Tone down overly intense designs while keeping quality high and preserving hierarchy.",
  },
  {
    slug: "shape",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/shape/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/shape/SKILL.md",
    name: "shape",
    description:
      "Plan feature UX before coding via a structured design interview that produces an actionable design brief.",
  },
  {
    slug: "typeset",
    user: "pbakaus",
    repo: "impeccable",
    rawUrl:
      "https://raw.githubusercontent.com/pbakaus/impeccable/main/source/skills/typeset/SKILL.md",
    githubUrl:
      "https://github.com/pbakaus/impeccable/blob/main/source/skills/typeset/SKILL.md",
    name: "typeset",
    description:
      "Improve typography systems, hierarchy, readability, and text cadence for more intentional interfaces.",
  },
];

const repoSkillCounts = registrySource.reduce((counts, entry) => {
  const repoKey = `${entry.user}/${entry.repo}`;
  counts.set(repoKey, (counts.get(repoKey) ?? 0) + 1);
  return counts;
}, new Map<string, number>());

const isGenericRepo = (repo: string) => repo === "skill" || repo === "skills";

const toSourceLabel = (user: string, repo: string) =>
  isGenericRepo(repo) ? user : `${user}/${repo}`;

const buildInitialPathSlug = (entry: RegistrySourceSkill) => {
  const repoKey = `${entry.user}/${entry.repo}`;
  const userSegment = entry.user.toLowerCase();
  const repoSegment = entry.repo.toLowerCase();

  if ((repoSkillCounts.get(repoKey) ?? 0) <= 1) {
    return entry.slug;
  }

  if (isGenericRepo(entry.repo)) {
    return `${userSegment}/${entry.slug}`;
  }

  return `${userSegment}/${repoSegment}/${entry.slug}`;
};

export const registry: RegistrySkill[] = [];
const usedPathSlugs = new Set<string>();

for (const entry of registrySource) {
  const userSegment = entry.user.toLowerCase();
  const repoSegment = entry.repo.toLowerCase();
  const sourceKey = `${userSegment}/${repoSegment}`;

  let pathSlug = buildInitialPathSlug(entry);
  if (usedPathSlugs.has(pathSlug)) {
    pathSlug = `${userSegment}/${repoSegment}/${entry.slug}`;
  }

  usedPathSlugs.add(pathSlug);

  registry.push({
    ...entry,
    pathSlug,
    sourceKey,
    sourceLabel: toSourceLabel(entry.user, entry.repo),
  });
}
