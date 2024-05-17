import { FC, KeyboardEvent, useRef, useState } from "react";
import CustomButton from "../atoms/CustomButton";
import { Magicpen, Information } from "iconsax-react";
import { generateImageFromText, translateText } from "../../api/apiService";
import { ChatMessage } from "../../types";
import { useAppContext } from "../../context/AppContext";
import logo from "../../assets/logo-40x40.svg";
import { chatLangOptions } from "../../mockData/chatMockData";

const ImageGenerateBox: FC<ImageGenerateProps> = () => {
  const { chatData, setChatData } = useAppContext();
  const [promptData, setPromptData] = useState<DataType>({
    language: "yo",
    prompt: "",
  });
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const updatePromptData = (fieldName: string, value: string) => {
    setPromptData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handlePlaceholderClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Escape") {
      inputRef.current?.blur();
    }

    if (event.key === "Enter") {
      if (promptData.prompt?.length > 0) {
        handleTranslate();
      }
    }
  };

  const handleGenerate = async (prompt: string) => {
    try {
      setChatData((prevData) => ({
        ...prevData,
        loading: "generating",
      }));

      const result = await generateImageFromText(prompt);

      if (result?.error) throw new Error("Failed to generate");
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
      const promptText = promptData.prompt;
      updatePromptData("prompt", "");

      const newUserMsg: ChatMessage = {
        sender: "user",
        content: promptText,
        timestamp: new Date(),
      };

      // curr messages??
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
      const result = await translateText(promptText, "en", promptData.language);

      if (result?.error) throw new Error("Failed to translate");

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
    }
  };

  return (
    <div className="flex flex-col justify-between w-full h-[132px] p-2 border border-[#262626] rounded-[10px] bg-[#1A1A1A]">
      <div className="relative">
        {!isInputFocused && !(promptData?.prompt?.length > 0) && (
          <div
            className="absolute flex items-center gap-3"
            onClick={handlePlaceholderClick}
          >
            <img src={logo} alt="logo" />
            <p className="text-[#888]">Ask me anything</p>
          </div>
        )}
        <textarea
          ref={inputRef}
          disabled={
            chatData.loading === "generating" ||
            chatData.loading === "translating"
          }
          value={promptData.prompt}
          onChange={(e) => updatePromptData("prompt", e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          className="w-full h-[62px] bg-transparent text-light leading-[1.25rem] text-[1rem] p-0 outline-none"
        />
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-1 sm:gap-3">
          <label
            htmlFor="dropdown"
            className="text-[0.875rem] leading-[1.25rem] font-[400] text-gray"
          >
            Language:
          </label>

          <div className="flex items-center gap-1 bg-[#262626] px-3 rounded-[5px]">
            <Information size={18} color="#FEFEFE" />
            <select
              id="dropdown"
              value={promptData.language}
              onChange={(e) => updatePromptData("language", e.target.value)}
              className="custom-select  h-[34px] bg-[#262626] py-2 pr-2 rounded-[5px] font-[400] text-light outline-none"
            >
              {chatLangOptions?.map(({ value, label }, i) => (
                <option value={value}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        <CustomButton
          onClick={handleTranslate}
          disabled={
            chatData.loading === "generating" ||
            chatData.loading === "translating" ||
            promptData.prompt.length === 0
          }
        >
          {<Magicpen size="18" color="#FEFEFE" />}
        </CustomButton>
      </div>
    </div>
  );
};

export default ImageGenerateBox;

interface ImageGenerateProps {}

type DataType = {
  language: string;
  prompt: string;
};
