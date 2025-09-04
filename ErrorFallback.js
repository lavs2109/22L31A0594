import React from 'react';

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" style={{ padding: '20px', color: 'red', textAlign: 'center' }}>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Try again
      </button>
    </div>
  );
}
