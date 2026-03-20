"use client"

import { useChat } from "@ai-sdk/react"
import { useEffect, useRef, useState } from "react"
import { MessageBubble } from "./message-bubble"
import { ChatInput } from "./chat-input"
import { SuggestedPrompts } from "./suggested-prompts"
import { TypingIndicator } from "@/components/ui/typing-indicator"
import { Bot, Sparkles, AlertCircle } from "lucide-react"

export function ChatInterface() {
  const { messages, sendMessage, isLoading, error } = useChat({
    api: "/api/chat",
  } as any) as any

  const [input, setInput] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ role: 'user', parts: [{ type: 'text', text: input }] })
    setInput("")
  }
  
  const endOfMessagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  const handleSuggestionSelect = (prompt: string) => {
    sendMessage({ role: 'user', parts: [{ type: 'text', text: prompt }] })
  }

  return (
    <div className="flex flex-col h-[calc(100vh-56px)] justify-between bg-zinc-50 dark:bg-zinc-950">
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto px-4 text-center mt-12 md:mt-24 space-y-6">
            <div className="h-16 w-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shadow-sm border border-indigo-100 dark:bg-indigo-950/30 dark:border-indigo-900/50">
              <Bot className="h-8 w-8" />
            </div>
            <div className="space-y-2 pb-6">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                LaunchPilot AI
              </h1>
              <p className="text-[15px] text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
                Your dedicated Go-to-Market advisor. Get actionable, structured strategies to launch and grow your startup.
              </p>
            </div>
            
            <SuggestedPrompts onSelect={handleSuggestionSelect} />
          </div>
        ) : (
          <div className="flex flex-col w-full pb-8">
            {messages.map((message: any) => (
              <MessageBubble 
                key={message.id} 
                role={message.role as "user" | "assistant"} 
                content={message.content || (message.parts?.filter((p: any) => p.type === 'text').map((p: any) => p.text).join('') || '')}
              />
            ))}
            
            {isLoading && (
              <div className="w-full flex py-6 px-4 bg-zinc-50/50 dark:bg-zinc-900/30">
                 <div className="container max-w-3xl mx-auto flex gap-4 md:gap-6">
                   <div className="shrink-0 h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-700">
                     <Sparkles className="h-4 w-4 text-white" />
                   </div>
                   <TypingIndicator />
                 </div>
              </div>
            )}
            
            {error && (
               <div className="w-full flex py-6 px-4 bg-red-50 dark:bg-red-950/30 border-y border-red-100 dark:border-red-900/50">
                 <div className="container max-w-3xl mx-auto flex gap-4 md:gap-6 text-red-600 dark:text-red-400">
                   <div className="shrink-0 h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/80 flex items-center justify-center">
                     <AlertCircle className="h-4 w-4" />
                   </div>
                   <div className="flex items-center text-sm font-medium">
                     {error.message || "An error occurred while communicating with the AI. Please make sure OPENAI_API_KEY is active."}
                   </div>
                 </div>
               </div>
            )}

            <div ref={endOfMessagesRef} />
          </div>
        )}
      </div>

      <div className="sticky bottom-0 bg-gradient-to-t from-zinc-50 via-zinc-50/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80 pt-6">
        <ChatInput 
          input={input} 
          handleInputChange={handleInputChange} 
          handleSubmit={handleSubmit} 
          isLoading={isLoading} 
        />
      </div>
    </div>
  )
}
