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
  // const url = "https://google-api31.p.rapidapi.com/gtranslate";

  // const payload = {
  //   text,
  //   to,
  //   from_lang,
  // };

  // const res = await fetch(url, {
  //   method: "POST",
  //   headers: getGTransHeaders(),
  //   body: JSON.stringify(payload),
  // });

  // return res.json().catch((e) => {
  //   console.error(e);
  //   return {};
  // });

  return { translated_text: text };
};

export const generateImageFromText = async (prompt: string) => {
  // const url = `${backend_url}/image/generate`;

  // const payload = {
  //   prompt,
  // };

  // const res = await fetch(url, {
  //   method: "POST",
  //   body: JSON.stringify(payload),
  // });

  // return res.json().catch((e) => {
  //   console.error(e);
  //   return {};
  // });

  return {
    url: "https://storage.googleapis.com/face-10b17.appspot.com/1715854767151_realistic.jpg?GoogleAccessId=face-10b17%40appspot.gserviceaccount.com&Expires=1715858367&Signature=bIDn%2BxHGUKngrQ8sMxRVc2AFXHrWLttITGG0O2sUeM7rjHmFo3H6iiF6fFTTIg0fDyZmQsNPJUXZ%2FS5RidI1RzlnKWYNY44iaua0e%2FiPEyRbPITy%2BtcTpwIIsnwiIiNzdP9LH42ajBmcMjuq%2FQsO2ollP2%2BYez5GLIdHraGIiRpAbivmJscmJLpIshoLi0mY6MBDjQ%2F4rQUZERi69PeumnNUEXOI8tgv6rOz0Nch0zZAjfl8f9JJmSmwifGeFZ%2BOaez9xZwENl9xf3ojyWbDVUAy%2B0WTcEQe8O7H%2FtgEc8T6mHDzH6sfs0V4Im4USUWSY0gaVwVJpusJeLrlL02jOw%3D%3D",
  };
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
