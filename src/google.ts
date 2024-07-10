export const googleAPI =
  (token: string, baseURL: string) =>
  async <T>(
    method: "GET" | "POST" | "PUT",
    endpoint: string,
    body?: Object
  ) => {
    const res = await fetch(`${baseURL}/${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: body ? JSON.stringify(body) : null,
    });
    console.log(`[${method}] ${baseURL}/${endpoint} ${res.status}`);
    if (!res.ok) {
      throw new Error(`Google API Error: ${await res.text()}`);
    }
    return res.json() as T;
  };

// declare global {
//   const google: typeof import("google-one-tap");
// }
