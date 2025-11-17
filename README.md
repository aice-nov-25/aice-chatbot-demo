# AICE Chatbot Demo - Week 2

A complete working chatbot demonstrating LangChain integration with streaming responses and conversation memory.

## Features

- **LangChain Integration**: Connected to Google Gemini via LangChain
- **Streaming Responses**: Real-time response streaming for better UX
- **Conversation Memory**: Maintains chat history for context-aware responses
- **Simple Setup**: Minimal configuration required

## Setup

### 1. Clone or Download

```bash
git clone https://github.com/aice-nov-25/aice-chatbot-demo.git
cd aice-chatbot-demo
```

### 2. Configure Environment

```bash
cp .env.sample .env
```

Get your Google AI API key from [Google AI Studio](https://ai.google.dev/) and add it to `.env`:

```env
GOOGLE_API_KEY=your-api-key-here
```

### 3. Install Dependencies

```bash
uv venv
uv pip install .
```

### 4. Run

```bash
source .venv/bin/activate
streamlit run main.py
```

Or with uv:

```bash
uv run streamlit run main.py
```

## How It Works

This chatbot demonstrates the core concepts from Week 2 of AICE:

1. **LangChain Chain**: Combines a prompt template with an LLM
2. **Streaming**: Uses `chain.stream()` to show responses in real-time
3. **Memory**: Passes chat history to maintain conversation context

## Code Structure

- `main.py`: Single-file chatbot implementation
- `pyproject.toml`: Python dependencies
- `.env`: API keys (not committed to git)

## Next Steps

This is a foundation for building more advanced features:

- Add voice transcription (Whisper)
- Add text-to-speech (ElevenLabs/Chatterbox)
- Integrate MCP servers for tool use
- Add local model support (Ollama)
- Add observability (Langfuse)

## Requirements

- Python 3.11+
- Google AI API key (free from [ai.google.dev](https://ai.google.dev/))
- [uv](https://docs.astral.sh/uv/) for package management
