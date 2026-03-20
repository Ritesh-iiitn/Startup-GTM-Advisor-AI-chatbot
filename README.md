# LaunchPilot AI - Startup GTM Advisor

LaunchPilot AI is a purpose-built AI advisor designed for early-stage startup founders. Unlike generic chatbots, this SaaS product provides structured, actionable, and execution-focused advice on Go-To-Market strategy, Ideal Customer Profile (ICP) definition, and growth planning.

## Features
- **SaaS-Grade UI:** A clean, minimal interface inspired by top-tier tools like Linear and Vercel.
- **Purpose-Built Persona:** Powered by a customized system prompt ensuring strict adherence to actionable GTM advice without fluff.
- **Streaming Responses:** Real-time AI output generation using the Vercel AI SDK.
- **Responsive Design:** Polished mobile and desktop experience built strictly with Tailwind CSS.
- **Quick-Start Prompts:** Built-in suggestions for common startup GTM challenges.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **AI Integration:** Vercel AI SDK (`ai` and `@ai-sdk/openai`)
- **Icons:** `lucide-react`
- **Deployment:** Ready for Vercel

## Local Development

1. **Clone & Setup:**
   Make sure you have Node >18.x installed.
   \`\`\`bash
   npm install
   \`\`\`

2. **Environment Variables:**
   Create a \`.env.local\` file in the root of your project:
   \`\`\`bash
   OPENAI_API_KEY=sk-...your-api-key...
   \`\`\`

3. **Run the Development Server:**
   \`\`\`bash
   npm run dev
   \`\`\`
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Architecture Notes
- `src/lib/system-prompt.ts`: The "brain" defining the AI's exact persona and the 5-step response formatting rules.
- `src/app/api/chat/route.ts`: Fast edge-compatible API route managing the model interaction and streaming text chunks back to the client.
- `src/components/chat/*`: Encapsulated domain logic for managing the chat input, chat history UI, markdown rendering, and typing states.

## Deployment Details
This application is designed specifically to be deployed on Vercel:
1. Push your repository to GitHub.
2. Link the repository in the Vercel dashboard.
3. Add the `OPENAI_API_KEY` to the Environment Variables settings in Vercel.
4. Deploy! Next.js and Vercel will automatically optimize the App Router and Edge Functions.
