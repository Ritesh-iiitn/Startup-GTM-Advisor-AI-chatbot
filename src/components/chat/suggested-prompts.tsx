import { Sparkles, Target, Megaphone, CheckCircle } from "lucide-react"

const SUGGESTIONS = [
  {
    icon: <Target className="h-4 w-4 text-rose-500" />,
    title: "Define my ICP",
    prompt: "Help me define the Ideal Customer Profile for a B2B SaaS tool that automates dev-ops reporting.",
  },
  {
    icon: <Sparkles className="h-4 w-4 text-amber-500" />,
    title: "Design a launch plan",
    prompt: "Create a 30-day Product Hunt launch plan for my side project.",
  },
  {
    icon: <Megaphone className="h-4 w-4 text-emerald-500" />,
    title: "Cold outreach strategy",
    prompt: "I need a cold email sequence to reach out to VP of Sales at mid-market tech companies.",
  },
  {
    icon: <CheckCircle className="h-4 w-4 text-blue-500" />,
    title: "Growth experiments",
    prompt: "Suggest 3 low-cost growth experiments to acquire my first 100 paying users.",
  },
]

export function SuggestedPrompts({ onSelect }: { onSelect: (prompt: string) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl mx-auto mt-8">
      {SUGGESTIONS.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => onSelect(suggestion.prompt)}
          className="flex flex-col items-start p-4 bg-white border border-zinc-200 rounded-xl hover:border-indigo-500 hover:shadow-sm transition-all text-left dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-indigo-500 group"
        >
          <div className="flex items-center space-x-2 mb-2">
            <div className="p-1.5 bg-zinc-50 rounded-md group-hover:bg-indigo-50 dark:bg-zinc-800 dark:group-hover:bg-indigo-950/30 transition-colors">
              {suggestion.icon}
            </div>
            <span className="font-medium text-zinc-900 text-sm dark:text-zinc-100">{suggestion.title}</span>
          </div>
          <p className="text-xs text-zinc-500 line-clamp-2 dark:text-zinc-400">{suggestion.prompt}</p>
        </button>
      ))}
    </div>
  )
}
