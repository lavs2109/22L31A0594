import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { log } from './services/logger';
import ErrorFallback from './components/ErrorFallback';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = async () => {
    try {
      setCount(count + 1);
      await log('UI', 'info', 'react-app', `Button clicked. Count is now ${count + 1}`);
    } catch (error) {
      console.error('Logging error:', error);
    }
  };

  const handleError = async (error, info) => {
    await log('UIError', 'error', 'react-app', `Error: ${error.message}, Info: ${info.componentStack}`);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
      <div style={styles.container}>
        <h1 style={styles.title}>Responsive React Logger Demo</h1>
        <button onClick={handleClick} style={styles.button}>
          Click me ({count})
        </button>

        <div style={styles.responsiveBox}>
          <p>This box resizes based on screen width.</p>
        </div>
      </div>
    </ErrorBoundary>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: 'auto',
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: 'center',
  },
  title: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    border: 'none',
    color: 'white',
    padding: '12px 24px',
    fontSize: 18,
    borderRadius: 6,
    cursor: 'pointer',
    marginBottom: 20,
  },
  responsiveBox: {
    border: '2px solid #007bff',
    padding: 15,
    borderRadius: 8,
    fontSize: 18,
    '@media(max-width: 600px)': {
      fontSize: 16,
    },
  },
};

export default App;
