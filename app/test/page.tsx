'use client';

import { useState, useEffect } from 'react';
import { apiRequest } from '../lib/api';
import { apiConfigs } from './apiConfigs';

// Set which API to call by setting this variable
const selectedApiKey = 'register'; // Change this to 'login' or any other API key

const TestPage = () => {
  const [responseData, setResponseData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const selectedApi = apiConfigs[selectedApiKey];
    
    if (selectedApi) {
      const { endpoint, method, body, authToken } = selectedApi;
      apiRequest(endpoint, method, body, authToken)
        .then((data) => setResponseData(data))
        .catch((err) => setError(err.message));
    }
  }, []); // Empty dependency array to ensure it only runs once on page load

  return (
    <div>
      <h1>API Test</h1>
      {responseData && <pre>{JSON.stringify(responseData, null, 2)}</pre>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default TestPage;