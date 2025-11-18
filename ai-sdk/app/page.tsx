'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>Simple Chatbot</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>🚀 A chatbot for AICE</p>

      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '1rem',
        minHeight: '400px',
        maxHeight: '600px',
        overflowY: 'auto',
        marginBottom: '1rem',
        backgroundColor: '#fafafa'
      }}>
        {messages.length === 0 && (
          <p style={{ color: '#999' }}>How can I help you?</p>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              marginBottom: '1rem',
              padding: '0.75rem',
              borderRadius: '6px',
              backgroundColor: message.role === 'user' ? '#e3f2fd' : '#f5f5f5',
            }}
          >
            <strong style={{
              color: message.role === 'user' ? '#1976d2' : '#666',
              marginBottom: '0.25rem',
              display: 'block'
            }}>
              {message.role === 'user' ? 'You' : 'Assistant'}
            </strong>
            <div style={{ whiteSpace: 'pre-wrap' }}>{message.content}</div>
          </div>
        ))}

        {isLoading && (
          <div style={{
            padding: '0.75rem',
            borderRadius: '6px',
            backgroundColor: '#f5f5f5',
            color: '#999'
          }}>
            Thinking...
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          disabled={isLoading}
          style={{
            flex: 1,
            padding: '0.75rem',
            borderRadius: '6px',
            border: '1px solid #ddd',
            fontSize: '1rem',
          }}
        />
        <button
          type="submit"
          disabled={isLoading}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#1976d2',
            color: 'white',
            fontSize: '1rem',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.6 : 1,
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
