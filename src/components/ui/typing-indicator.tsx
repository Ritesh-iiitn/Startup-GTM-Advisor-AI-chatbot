export function TypingIndicator() {
  return (
    <div className="flex items-center space-x-1.5 p-4 bg-zinc-50 rounded-lg max-w-fit border border-zinc-100 dark:bg-zinc-900 dark:border-zinc-800">
      <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
      <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "150ms" }}></div>
      <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
    </div>
  )
}
