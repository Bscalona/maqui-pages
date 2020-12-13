const API_URL =
  "https://2ngrcmozhk.execute-api.us-east-2.amazonaws.com/default/sendMessage?email=";

const apiFetch = async (url: string, method: "GET") => {
  try {
    const dataResult = await fetch(API_URL + url, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
    });
    if (!dataResult.ok) {
      const { message } = await dataResult.json();
      throw message;
    }
    return await dataResult.json();
  } catch (error) {
    throw error;
  }
};

export const sendMessage = async (message: string) => {
  try {
    const resolve = await apiFetch(message, "GET");
    return resolve;
  } catch (err) {
    throw err;
  }
};
