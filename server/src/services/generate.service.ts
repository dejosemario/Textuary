import axios from 'axios';

type TextToImageOptions = {
    apiKey: string;
    apiEndpoint: string;
  };

 const generateImageService = async (prompt: string, options: TextToImageOptions): Promise<any> => {
    try{
        const {apiKey, apiEndpoint} = options;
        const response = await axios.request({
            method: 'POST',
            url: apiEndpoint,
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'dalle-image-generator.p.rapidapi.com'
            },
            data: {
                prompt
            }

        })
        return response.data;
    }
    catch (error: any){
        throw new Error(`Error generating image: ${error.message}`);
    }


};

export default generateImageService;