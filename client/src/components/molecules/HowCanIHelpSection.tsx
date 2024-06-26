import { Magicpen, MessageText } from "iconsax-react";

const HowCanIHelpSection = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="mb-5 text-light font-[700] text-[1.5rem] leading-[29.05px] md:text-[36px] md:leading-[43.57px]">
        How can I help you today?
      </h1>

      <p className="max-w-[559px] text-light mb-9 font-[400] text-[1rem] leading-[22px]">
        Textuary is a personal AI-powered assistant, ready to help you generate
        image through local language text input. Let’s get started on this
        amazing journey together.
      </p>

      {/* Fix specificity of custom classNames */}
      <div>
        <p className="text-gray flex justify-start items-start md:items-center gap-2 text-center mb-3 font-[400] text-[11px] sm:text-[16px] leading-[19.36px]">
          <Magicpen color="#FEFEFE" size="18" />
          Generate all kinds of image and illustrations
        </p>

        <p className="text-gray flex justify-start items-start md:items-center gap-2 text-center font-[400] text-[11px] sm:text-[16px] leading-[19.36px]">
          <MessageText color="#FEFEFE" size="18" />
          Generate images using your language preference
        </p>
      </div>
    </div>
  );
};

export default HowCanIHelpSection;
