import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AICE Chatbot - AI SDK',
  description: 'A chatbot demo using Vercel AI SDK',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
