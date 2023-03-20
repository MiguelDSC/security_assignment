export const getGeneratedText = async (
  description: string,
  csrftoken: string
) => {
  console.log(csrftoken);
  console.log(document.cookie);

  try {
    const response = await fetch("http://localhost:3400/generate-text", {
      method: "POST",
      body: JSON.stringify({ description: description }),
      headers: {
        "content-type": "application/json",
        "X-XSRF-TOKEN": "-2zGRqAfnbVWp-h_aHIoqS68",
      },
    });
    if (response.ok) {
      const result = await response.text();

      return result;
    }
    const result = response.statusText;
    // if (!response.ok) console.log(response.statusText);

    return result;
  } catch (e) {
    if (e instanceof Error) return e.message;

    throw e;
  }
};

export const getCsrfToken = async () => {
  try {
    const response = await fetch(`http://localhost:3400/`);
    if (response.ok) {
      const result = await response.json();
      console.log(result.csrf);

      return result.csrf;
    }
    const result = response.statusText;

    return result;
  } catch (e) {
    if (e instanceof Error) return e.message;
    throw e;
  }
};

const tempPrivateKey = import.meta.env.VITE_PRIVATE_KEY;
