import axios from 'axios';


const LOG_SERVER_URL = process.env.REACT_APP_LOG_SERVER_URL;
const AUTH_TOKEN = process.env.REACT_APP_LOG_AUTH_TOKEN;

export async function log(stack, level, packageName, message) {
  const payload = {
    stack,
    level,
    package: packageName,
    message,
    timestamp: new Date().toISOString(),
  };

  try {
    await axios.post(LOG_SERVER_URL, payload, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });
    console.log(`Log sent: [${level}] ${packageName} - ${message}`);
  } catch (error) {
    console.error('Failed to send log:', error.message);
  }
}
