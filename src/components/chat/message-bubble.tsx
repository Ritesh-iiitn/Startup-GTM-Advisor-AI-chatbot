import { Copy, User, Bot, Check } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function MessageBubble({ role, content }: { role: "user" | "assistant", content: string }) {
  const [copied, setCopied] = useState(false)
  
  const handleCopy = () => {
    navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // A very basic markdown-to-html renderer to avoid external markdown libraries for simplicity
  const formatContent = (text: string) => {
    if (!text) return null;
    return text.split("\n").map((line, i) => {
      // Bold text handling
      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      
      // Header handling
      if (line.match(/^### /)) {
        return <h3 key={i} className="text-lg font-semibold mt-4 mb-2 text-zinc-900 dark:text-zinc-100" dangerouslySetInnerHTML={{ __html: formattedLine.replace(/^### /, "") }} />
      }
      if (line.match(/^## /)) {
        return <h2 key={i} className="text-xl font-bold mt-5 mb-3 text-zinc-900 dark:text-zinc-50" dangerouslySetInnerHTML={{ __html: formattedLine.replace(/^## /, "") }} />
      }
      // List handling
      if (line.match(/^- /)) {
        return <li key={i} className="ml-4 list-disc mb-1" dangerouslySetInnerHTML={{ __html: formattedLine.replace(/^- /, "") }} />
      }
      // Numbered list
      if (line.match(/^\d+\. /)) {
        return <div key={i} className="font-semibold mt-3 mb-1 text-zinc-800 dark:text-zinc-200" dangerouslySetInnerHTML={{ __html: formattedLine }} />
      }
      
      if (line.trim() === "") {
        return <br key={i} />
      }
      return <p key={i} className="mb-2" dangerouslySetInnerHTML={{ __html: formattedLine }} />
    })
  }

  return (
    <div className={cn(
      "w-full flex py-6 px-4 first:pt-4",
      role === "assistant" ? "bg-zinc-50/50 dark:bg-zinc-900/30" : "bg-white dark:bg-zinc-950"
    )}>
      <div className="container max-w-3xl mx-auto flex gap-4 md:gap-6">
        <div className="shrink-0">
          {role === "user" ? (
            <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
              <User className="h-4 w-4 text-indigo-700 dark:text-indigo-400" />
            </div>
          ) : (
            <div className="h-8 w-8 rounded-full bg-zinc-900 dark:bg-zinc-50 flex items-center justify-center border border-zinc-700">
              <Bot className="h-4 w-4 text-white dark:text-zinc-900" />
            </div>
          )}
        </div>
        
        <div className="flex-1 space-y-2 overflow-hidden">
          <div className="text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300 antialiased">
            {formatContent(content)}
          </div>
        </div>

        {role === "assistant" && (
          <div className="shrink-0 flex items-start opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleCopy}
              className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800"
              title="Copy response"
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
