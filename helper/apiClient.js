const API_KEY = process.env.API_KEY || ""; // Available on both browser + server

/**
 * Custom fetch wrapper with x-api-key header
 *
 * @param {string} endPoint - The endpoint URL (can be full or relative)
 * @param {'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'} method - HTTP method
 * @param {object | FormData} [body] - Optional body for methods like POST/PUT
 * @param {boolean} [isMultipart=false] - Set to true if sending FormData
 * @returns {Promise<any>} - Parsed JSON response
 */
export const apiClient = async (
  endPoint,
  method = "GET",
  body,
  isMultipart = false
) => {
  try {
    const headers = {
      "x-api-key": API_KEY,
    };

    if (!isMultipart) {
      headers["Content-Type"] = "application/json";
    }

    const options = {
      method,
      headers,
      credentials: "include",
    };

    if (body && method !== "GET") {
      options.body = isMultipart ? body : JSON.stringify(body);
    }

    const res = await fetch(`${process.env.API_LINK}${endPoint}`, options);

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData?.message || `Request failed (${res.status})`);
    }

    return await res.json();
  } catch (err) {
    throw err;
  }
};
