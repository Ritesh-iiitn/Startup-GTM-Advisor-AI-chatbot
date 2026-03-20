import { groq } from "@ai-sdk/groq"
import { streamText, convertToModelMessages } from "ai"
import { systemPrompt } from "@/lib/system-prompt"

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  try {
    const result = await streamText({
      model: groq("llama-3.3-70b-versatile"),
      system: systemPrompt,
      messages: await convertToModelMessages(messages),
    })

    return result.toUIMessageStreamResponse()
  } catch (err: any) {
    return new Response(err.message || "Unknown error", { status: 500 })
  }
}