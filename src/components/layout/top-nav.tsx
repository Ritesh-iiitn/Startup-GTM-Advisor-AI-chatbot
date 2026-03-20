import { Rocket } from "lucide-react"

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="container mx-auto flex h-14 items-center px-4 max-w-4xl">
        <a href="/" className="flex items-center space-x-2">
          <Rocket className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <span className="font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            LaunchPilot <span className="text-zinc-500 font-normal">AI</span>
          </span>
        </a>
        <div className="flex-1" />
        <nav className="flex items-center space-x-4">
          <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md border border-indigo-100 dark:bg-indigo-950 dark:border-indigo-900 dark:text-indigo-300">
            Startup GTM Advisor
          </span>
        </nav>
      </div>
    </header>
  )
}
