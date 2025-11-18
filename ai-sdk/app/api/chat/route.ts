import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_API_KEY || '',
  });

  const result = streamText({
    model: google('gemini-flash-latest'),
    messages,
  });

  return result.toDataStreamResponse();
}
