const API_KEY = process.env.API_KEY || ""; // Available on both browser + server

/**
 * Custom fetch wrapper with x-api-key header
 *
 * @param {string} endPoint - The endpoint URL (can be full or relative)
 * @param {'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'} method - HTTP method
 * @param {object} [body] - Optional body for methods like POST/PUT
 * @returns {Promise<any>} - Parsed JSON response
 */
export const apiClient = async (endPoint, method = "GET", body) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    };

    const options = {
      method,
      headers,
    };

    if (body && method !== "GET") {
      options.body = JSON.stringify(body);
    }

    const res = await fetch(`${process.env.API_LINK}${endPoint}`, options);

    if (!res.ok) {
      const errorData = await res.json();

      const error = new Error(
        errorData?.message || `Request failed (${res.status})`
      );
      throw error;
    }

    return await res.json();
  } catch (err) {
    throw err;
  }
};
