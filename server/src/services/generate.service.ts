import axios from "axios";

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
    console.log("Opt", options);

    const payload = {
      method: "POST",
      url: apiEndpoint,
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "dalle-image-generator.p.rapidapi.com",
      },
      data: { prompt },
    };

    const response = await axios.request(payload);
    console.log("I am response", response);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error generating image: ${error}`);
  }
};

export default generateImageService;
