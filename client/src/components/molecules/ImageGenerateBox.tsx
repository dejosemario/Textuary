import CustomButton from "../atoms/CustomButton";
import { Magicpen } from "iconsax-react";

const backendUrl = process.env.REACT_APP_BACKEND_URL;
console.log("🚀 ~ backendUrl:", backendUrl)

const ImageGenerateBox = () => {
  return (
    <div className="flex flex-col gap-5 w-full h-[132px] p-2 border border-[#262626] rounded-md bg-[#1A1A1A]">
      <input
        id="mainInput"
        type="text"
        className="w-full h-[62px] bg-transparent text-[#FEFEFE] leading-[1.25rem] font-[1rem]"
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
            className="w-[116px] bg-[#262626] px-2 py-3 rounded-[5px] text-[#FEFEFE]"
          >
            {/* <option value="">Choose...</option> */}
            <option value="option1">French</option>
            <option value="option2">Yoruba</option>
          </select>
        </div>

        <CustomButton>{<Magicpen size="18" color="#FEFEFE" />}</CustomButton>
      </div>
    </div>
  );
};

export default ImageGenerateBox;
