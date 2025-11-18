# AICE Chatbot Demo - Vercel AI SDK Version

A complete working chatbot demonstrating Vercel AI SDK integration with streaming responses and conversation memory.

## Features

- **Vercel AI SDK Integration**: Connected to Google Gemini via AI SDK
- **Streaming Responses**: Real-time response streaming for better UX
- **Conversation Memory**: Automatically maintains chat history
- **Type-Safe**: Full TypeScript support
- **Simple Setup**: Minimal configuration required

## Setup

### 1. Navigate to this folder

```bash
cd ai-sdk-version
```

### 2. Configure Environment

Copy the environment file:

```bash
cp .env.local.sample .env.local
```

Get your Google AI API key from [Google AI Studio](https://ai.google.dev/) and add it to `.env.local`:

```env
GOOGLE_API_KEY=your-api-key-here
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

This chatbot demonstrates the core concepts of Vercel AI SDK:

1. **useChat Hook**: React hook that manages chat state, streaming, and history
2. **streamText**: Server-side API that streams responses from the LLM
3. **Automatic Memory**: Chat history is automatically managed by the SDK

## Code Structure

- `app/page.tsx`: Chat UI using the `useChat` hook
- `app/api/chat/route.ts`: API endpoint that streams responses
- `app/layout.tsx`: Root layout and metadata
- `package.json`: Dependencies
- `.env.local`: API keys (not committed to git)

## Comparison with LangChain Version

| Feature | LangChain | AI SDK |
|---------|-----------|--------|
| Language | Python | TypeScript |
| UI Framework | Streamlit | Next.js (React) |
| Streaming | Manual container updates | Built-in with `useChat` |
| Memory | Manual session state | Automatic |
| Type Safety | Runtime | Compile-time |
| Setup Complexity | Lower | Slightly higher |

## Key Differences

### LangChain Version (Python/Streamlit)
- Single file, synchronous code
- Manual state management with `st.session_state`
- Explicit streaming loop with container updates
- Great for quick prototypes and data science workflows

### AI SDK Version (TypeScript/Next.js)
- Client/server split (React + API route)
- Automatic state management with `useChat` hook
- Built-in streaming with no manual updates needed
- Production-ready, full-stack type safety

## Next Steps

This is a foundation for building more advanced features:

- Add structured outputs with Zod schemas
- Add tool calling for external APIs
- Add multimodal inputs (images, audio)
- Add middleware for auth and rate limiting
- Deploy to Vercel with zero configuration

## Requirements

- Node.js 18+
- Google AI API key (free from [ai.google.dev](https://ai.google.dev/))
- npm or yarn
