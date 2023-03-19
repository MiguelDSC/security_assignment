export const getGeneratedText = async (description: string) => {
  try {
    const response = await fetch("http://localhost:3400/generate-text", {
      method: "POST",
      body: JSON.stringify({ description: description }),
      headers: {
        "content-type": "application/json",
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

const tempPrivateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIBOgIBAAJBAKj34GkxFhD90vcNLYLInFEX6Ppy1tPf9Cnzj4p4WGeKLs1Pt8Qu
KUpRKfFLfRYC9AIKjbJTWit+CqvjWYzvQwECAwEAAQJAIJLixBy2qpFoS4DSmoEm
o3qGy0t6z09AIJtH+5OeRV1be+N4cDYJKffGzDa88vQENZiRm0GRq6a+HPGQMd2k
TQIhAKMSvzIBnni7ot/OSie2TmJLY4SwTQAevXysE2RbFDYdAiEBCUEaRQnMnbp7
9mxDXDf6AU0cN/RPBjb9qSHDcWZHGzUCIG2Es59z8ugGrDY+pxLQnwfotadxd+Uy
v/Ow5T0q5gIJAiEAyS4RaI9YG8EWx/2w0T67ZUVAw8eOMB6BIUg0Xcu+3okCIBOs
/5OiPgoTdSy7bcF9IGpSE8ZgGKzgYQVZeN97YE00
-----END RSA PRIVATE KEY-----`;
