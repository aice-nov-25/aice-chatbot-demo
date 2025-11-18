# AICE Chatbot Demo

This repository contains two implementations of the same chatbot, demonstrating different AI development frameworks for the AICE course.

## 📁 Project Structure

```
.
├── ai-sdk/              # Vercel AI SDK implementation (TypeScript/Next.js)
│   └── .env.local.sample
└── langchain-streamlit/ # LangChain implementation (Python/Streamlit)
    └── .env.sample
```

## 🚀 Quick Start

### Prerequisites

Get a Google AI API key from [Google AI Studio](https://ai.google.dev/)

### Option 1: AI SDK Version (TypeScript/Next.js)

```bash
cd ai-sdk
cp .env.local.sample .env.local
# Edit .env.local and add your Google AI API key
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

**Features:**
- Built-in streaming with `useChat` hook
- Type-safe with TypeScript
- Production-ready React components
- Automatic conversation memory

### Option 2: LangChain Version (Python/Streamlit)

```bash
cd langchain-streamlit
cp .env.sample .env
# Edit .env and add your Google AI API key
uv venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
uv pip install -r pyproject.toml
streamlit run main.py
```

Open [http://localhost:8501](http://localhost:8501)

**Features:**
- Simple single-file implementation
- Manual streaming with container updates
- Session state management
- Great for rapid prototyping

## 🔑 Environment Setup

Both implementations use the same environment variable `GOOGLE_API_KEY`:

### LangChain Version
Create `.env` in the `langchain-streamlit` directory:
```env
GOOGLE_API_KEY=your-api-key-here
```

### AI SDK Version
Create `.env.local` in the `ai-sdk` directory:
```env
GOOGLE_API_KEY=your-api-key-here
```

## 📊 Comparison

| Aspect | AI SDK (TypeScript) | LangChain (Python) |
|--------|--------------------|--------------------|
| **Language** | TypeScript | Python |
| **UI Framework** | Next.js (React) | Streamlit |
| **Streaming** | Built-in with hooks | Manual implementation |
| **Memory** | Automatic | Session state |
| **Type Safety** | Compile-time | Runtime |
| **Setup Complexity** | Moderate | Simple |
| **Best For** | Production apps | Prototypes & demos |

## 🎯 Learning Objectives

This demo helps you understand:

1. **Different AI SDK approaches** - Compare how Vercel AI SDK and LangChain handle the same task
2. **Streaming responses** - See different implementations of real-time AI responses
3. **State management** - Understand conversation memory in both frameworks
4. **Framework trade-offs** - Learn when to use each approach

## 🛠️ Technical Details

### AI SDK Implementation
- Uses Vercel AI SDK's `streamText` function
- Google Gemini model: `gemini-flash-latest`
- React hooks for state management
- Server-side API routes in Next.js

### LangChain Implementation
- Uses LangChain's `ChatGoogleGenerativeAI`
- Same Google Gemini model
- Streamlit session state for memory
- Direct API calls from Python

## 📚 Resources

- [Vercel AI SDK Documentation](https://sdk.vercel.ai/docs)
- [LangChain Documentation](https://python.langchain.com/docs/get_started/introduction)
- [Google AI Studio](https://ai.google.dev/)
