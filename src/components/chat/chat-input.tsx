import { ArrowUp } from "lucide-react"
import { useRef, useEffect } from "react"

interface ChatInputProps {
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isLoading: boolean
}

export function ChatInput({ input, handleInputChange, handleSubmit, isLoading }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`
    }
  }, [input])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (input.trim() && !isLoading) {
        handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-full flex-col max-w-3xl mx-auto items-center p-4 bg-white dark:bg-zinc-950 backdrop-blur-md pb-6 md:pb-8"
    >
      <div className="relative w-full flex flex-col pt-2 shadow-sm rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all duration-200 ease-in-out">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask about GTM, outreach, or launch strategy..."
          className="min-h-[52px] w-full resize-none border-0 bg-transparent px-4 py-[14px] pr-12 focus:ring-0 text-[15px] placeholder:text-zinc-500 dark:text-zinc-100 dark:placeholder:text-zinc-400 outline-none overscroll-none scrollbar-w-1.5 scrollbar-track-transparent scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700"
          rows={1}
          autoFocus
          disabled={isLoading}
        />
        <div className="absolute right-2 bottom-2">
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white transition-opacity hover:bg-zinc-800 disabled:opacity-30 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <ArrowUp className="h-4 w-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
      <div className="mt-2 text-center text-xs text-zinc-400 dark:text-zinc-500">
        LaunchPilot AI can make mistakes. Verify important advice.
      </div>
    </form>
  )
}
