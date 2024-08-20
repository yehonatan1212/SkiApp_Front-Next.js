export const apiRequest = async (
  endpoint: string,
  method: string = 'GET',
  body: any = null,
  authToken: string | null = null
) => {
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (authToken) {
      headers['Authorization'] = `${authToken}`;
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    });
        // Delete
    console.log('Request Details:', {
      url: `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${authToken}`
      }
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};
