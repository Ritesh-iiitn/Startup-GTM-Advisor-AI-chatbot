import { TopNav } from "@/components/layout/top-nav"
import { ChatInterface } from "@/components/chat/chat-interface"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950 font-sans">
      <TopNav />
      <div className="flex-1 w-full mx-auto">
        <ChatInterface />
      </div>
    </main>
  )
}
