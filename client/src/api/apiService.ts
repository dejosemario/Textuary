const backend_url = process.env.REACT_APP_BACKEND_URL;
const rapid_api_key = process.env.REACT_APP_RAPID_API_KEY;

const backend_headers = {
  // "x-api-key": process.env.REACT_APP_PROFILE_BACKEND_API_KEY,
  Accept: "application/json",
  "Content-Type": "application/json",
};

const getGTransHeaders = () => {
  const headers = {
    "content-type": "application/json",
    "X-RapidAPI-Key": rapid_api_key || "",
    "X-RapidAPI-Host": "google-api31.p.rapidapi.com",
  };

  return headers;
};

export const translateText = async (
  text: string,
  to: string,
  from_lang = ""
) => {
  const url = "https://google-api31.p.rapidapi.com/gtranslate";

  const payload = {
    text,
    to,
    from_lang,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: getGTransHeaders(),
    body: JSON.stringify(payload),
  });

  return res.json().catch((e) => {
    console.error(e);
    return {};
  });

  // return { translated_text: text };
};

export const generateImageFromText = async (prompt: string) => {
  const url = `${backend_url}/image/generate`;

  const payload = {
    prompt,
  };

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return res.json().catch((e) => {
    console.error(e);
    return {};
  });

  // return {
  //   url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_MG9Uu0FO2CSst2NVIXWJvoiJkZYFR7pf7CzOHYF3Dw&s",
  // };
};

export const signup = async (email: string, password: string) => {
  const url = `${backend_url}/auth/signup`;

  const payload = {
    email,
    password,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: backend_headers,
    body: JSON.stringify(payload),
  });

  return res.json().catch((e) => {
    console.error(e);
    return {};
  });
};

export const login = async (email: string, password: string) => {
  const url = `${backend_url}/auth/login`;

  const payload = {
    email,
    password,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: backend_headers,
    body: JSON.stringify(payload),
  });

  return res.json().catch((e) => {
    console.log(e);
    return {};
  });
};
