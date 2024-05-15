import Typography from "../atoms/Typography";
import { Magicpen, MessageText } from "iconsax-react";

const HowCanIHelpSection = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Typography as="h1" className="mb-5">
        How can i help you today?
      </Typography>

      <Typography as="p" className="max-w-[559px] text-[#FEFEFE] mb-9">
        Textuary is a personal AI-powered assistant, ready to help you generate
        image through local language text input. Let’s get started on this
        amazing journey together.
      </Typography>

      {/* Fix specificity of custom classNames */}
      <div>
        <Typography
          as="p"
          className="text-[#888] flex items-center gap-2 text-center mb-3"
        >
          <Magicpen color="#FEFEFE" size="18" />
          Generate all kinds of image and illustrations
        </Typography>

        <Typography
          as="p"
          className="text-[#888] flex items-center gap-2 text-center"
        >
          <MessageText color="#FEFEFE" size="18" />
          Generate images using your language preference
        </Typography>
      </div>
    </div>
  );
};

export default HowCanIHelpSection;
