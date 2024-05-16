import { useEffect, useState } from "react";
import CustomButton from "../atoms/CustomButton";
import { Magicpen } from "iconsax-react";
import { generateTextFromImage, translateText } from "../../api/apiService";

const ImageGenerateBox = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    translation: "not_loaded",
    generation: "not_loaded",
    error: false,
  });

  const updateLoadingState = (
    component: keyof Omit<LoadingState, "error">,
    status: "not_loaded" | "loading" | "loaded",
    hasError: boolean = false
  ) => {
    setLoadingState((prevState) => ({
      ...prevState,
      [component]: status,
      error: hasError ? true : prevState.error,
    }));
  };

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
      updateLoadingState("generation", "loading", false);
      const result = await generateTextFromImage(prompt);
      console.log("🚀 ~ handleGenerate ~ result:", result);

      updateLoadingState("translation", "loaded", false);
    } catch (error) {
      updateLoadingState("translation", "loaded", true); // loaded or not_loaded?
      console.log("🚀 ~ handleGenerate ~ error:", error);
    }
  };

  const handleTranslate = async () => {
    try {
      updateLoadingState("translation", "loading", false);
      const result = await translateText(
        promptData.prompt,
        "en",
        promptData.language
      );
      console.log("🚀 ~ handleTranslate ~ result:", result);

      if (result?.translated_text) {
        updateLoadingState("translation", "loaded", false);
        handleGenerate(result.translated_text);
      }
    } catch (error) {
      updateLoadingState("translation", "loaded", true); // loaded or not_loaded?
      console.log("🚀 ~ handleTranslate ~ error:", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 max-w-[906px] w-full h-[132px] p-2 border border-[#262626] rounded-[10px] bg-[#1A1A1A]">
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

type DataType = {
  language: string;
  prompt: string;
};

type LoadingState = {
  translation: "not_loaded" | "loading" | "loaded";
  generation: "not_loaded" | "loading" | "loaded";
  error: boolean;
};
