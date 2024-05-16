import { Dispatch, FC, SetStateAction, useState } from "react";
import CustomButton from "../atoms/CustomButton";
import { Magicpen } from "iconsax-react";
import { generateImageFromText, translateText } from "../../api/apiService";
import { ChatData, ChatMessage } from "../../types";

const ImageGenerateBox: FC<ImageGenerateProps> = ({
  chatData,
  setChatData,
}) => {
  const [promptData, setPromptData] = useState<DataType>({
    language: "yo",
    prompt: "",
  });

  const updatePromptData = (fieldName: string, value: string) => {
    setPromptData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleGenerate = async (prompt: string) => {
    try {
      setChatData((prevData) => ({
        ...prevData,
        loading: "generating",
      }));

      const result = await generateImageFromText(prompt);

      console.log("🚀 ~ handleGenerate ~ result:", result);

      const currentDate = new Date();

      const newAiMsg: ChatMessage = {
        sender: "model",
        content: "Here is the result of your description.",
        timestamp: currentDate,
        imageUrl: result.url,
      };

      setChatData((prevData) => ({
        ...prevData,
        loading: "generated",
        chatActive: true,
        chatBotMessage: "",
        currentConversationId: "",
        messagesList: [...prevData.messagesList, newAiMsg],
      }));
    } catch (error) {
      setChatData((prevData) => ({
        ...prevData,
        loading: "error",
      }));

      console.log("error:", error);
    }
  };

  const handleTranslate = async () => {
    try {
      const newUserMsg: ChatMessage = {
        sender: "user",
        content: promptData.prompt,
        timestamp: new Date(),
      };

      setChatData((prevData) => ({
        ...prevData,
        chatActive: true,
        chatBotMessage: "",
        currentConversationId: "",
        messagesList: [...prevData.messagesList, newUserMsg],
      }));

      setChatData((prevData) => ({
        ...prevData,
        loading: "translating",
      }));
      const result = await translateText(
        promptData.prompt,
        "en",
        promptData.language
      );
      console.log("🚀 ~ handleTranslate ~ result:", result);

      if (result?.translated_text) {
        setChatData((prevData) => ({
          ...prevData,
          loading: "translated",
        }));
        handleGenerate(result.translated_text);
      }
    } catch (error) {
      setChatData((prevData) => ({
        ...prevData,
        loading: "error",
      }));
      console.log("🚀 ~ handleTranslate ~ error:", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 max-w-full sm:max-w-[906px] w-[90%] md:w-full h-[132px] p-2 border border-[#262626] rounded-[10px] bg-[#1A1A1A]">
      <input
        type="text"
        value={promptData.prompt}
        onChange={(e) => updatePromptData("prompt", e.target.value)}
        className="w-full h-[62px] bg-transparent text-[#FEFEFE] leading-[1.25rem] font-[1rem] outline-none"
      />

      <div className=" flex justify-between">
        <div>
          <label
            htmlFor="dropdown"
            className="mr-3 text-[0.875rem] leading-[1.25rem] font-[400] text-[#888]"
          >
            Language:
          </label>

          <select
            id="dropdown"
            value={promptData.language}
            onChange={(e) => updatePromptData("language", e.target.value)}
            className="w-[116px] bg-[#262626] px-2 py-3 rounded-[5px] text-[#FEFEFE]"
          >
            {/* <option value="">Choose...</option> */}
            <option value="fr">French</option>
            <option value="yo">Yoruba</option>
          </select>
        </div>

        <CustomButton onClick={handleTranslate}>
          {<Magicpen size="18" color="#FEFEFE" />}
        </CustomButton>
      </div>
    </div>
  );
};

export default ImageGenerateBox;

interface ImageGenerateProps {
  chatData: ChatData;
  setChatData: Dispatch<SetStateAction<ChatData>>;
}

type DataType = {
  language: string;
  prompt: string;
};

type LoadingState = {
  translation: "not_loaded" | "loading" | "loaded";
  generation: "not_loaded" | "loading" | "loaded";
  error: boolean;
};
