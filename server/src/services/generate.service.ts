import axios from 'axios';

type TextToImageOptions = {
  apiKey: string | undefined;
  apiEndpoint: string | undefined;
};

const generateImageService = async (
  prompt: string,
  options: TextToImageOptions
): Promise<any> => {
  try {
    const { apiKey, apiEndpoint } = options;
    console.log('Opt', options);

    const payload = {
      method: 'POST',
      url: apiEndpoint,
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'dalle-image-generator.p.rapidapi.com',
      },
      data: { prompt },
    };

    const response = await axios.request(payload);
    console.log('I am response', response);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error generating image: ${error}`);
  }
};

export const translated = async (
  prompt: string,
  options: TextToImageOptions
): Promise<any> => {
  try {
    const { apiKey, apiEndpoint } = options;
    console.log('Opt', options);

    const payload = {
      method: 'POST',
      url: apiEndpoint,
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'dalle-image-generator.p.rapidapi.com',
      },
      data: { inputs: prompt },
    };

    const response = await axios.request(payload);
    console.log('I am response', response);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error generating image: ${error}`);
  }
};

export const translate = async (text: string): Promise<any> => {
  try {
    const options = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '09e953f23bmsh34e92e08f48138ap1105bcjsn7d952fa0d606',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
      },
      data: text,
    };

    const response = await axios.request(options);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default generateImageService;
