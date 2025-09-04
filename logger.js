const axios = require('axios');

const LOG_SERVER_URL = 'http://20.244.56.144/evaluation-service/logs';

const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJsYXZhbnlha29sbGEwOUBnbWFpbC5jb20iLCJleHAiOjE3NTY5NjY4NTEsImlhdCI6MTc1Njk2NTk1MSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImE0MThhODA0LTcwOTktNDJjMC1hN2YxLWU1OGNkNzI5N2JiNSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImtvbGxhIGxhdmFueWEiLCJzdWIiOiIzODUxZWI0MS1jN2JkLTRjMTgtOTMxYy1kNWQ3OGNkODI4ZTIifSwiZW1haWwiOiJsYXZhbnlha29sbGEwOUBnbWFpbC5jb20iLCJuYW1lIjoia29sbGEgbGF2YW55YSIsInJvbGxObyI6IjIybDMxYTA1OTQiLCJhY2Nlc3NDb2RlIjoiWXp1SmVVIiwiY2xpZW50SUQiOiIzODUxZWI0MS1jN2JkLTRjMTgtOTMxYy1kNWQ3OGNkODI4ZTIiLCJjbGllbnRTZWNyZXQiOiJ0UUhVTXZ2YUtoVWdTaFB6In0.v79E0DDODo-SXNmMMGiUm5MZoBUqesY68s01Qx8wqW8';

async function log(stack, level, packageName, message) {
  const payload = {
    stack,
    level,
    package: packageName,
    message,
    timestamp: new Date().toISOString()
  };

  try {
    await axios.post(LOG_SERVER_URL, payload, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`
      }
    });
    console.log(`Log sent: [${level}] ${packageName} - ${message}`);
  } catch (error) {
    console.error('Failed to send log:', error.message);
  }
}

module.exports = log;
