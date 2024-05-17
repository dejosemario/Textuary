import { FC, useState } from "react";
import logo from "../../assets/logo-40x40.svg";
import loader from "../../assets/tinyLoader.gif";

const ChatBotMsg: FC<ChatBotMsgProps> = ({
  msg,
  imgUrl,
  error,
  loading = false,
}) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleImageClick = () => {
    setOverlayVisible(true);
  };

  const handleOverlayClick = () => {
    setOverlayVisible(false);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex items-start gap-[10.5px]">
        <img src={logo} alt="logo" />
        <div className="flex flex-col gap-[14.5px] mt-[10px]">
          <p className="leading-5 font-[600] text-[1rem] text-light">
            Textuary AI
          </p>
          <p
            className={`flex gap-3 leading-5 font-[400] text-[1rem] ${
              error ? "text-error" : "text-light"
            }`}
          >
            {loading && (
              <img className="w-[18px] h-[18px]" src={loader} alt="loading" />
            )}
            {msg}
          </p>
        </div>
      </div>

      <div className="max-w-full ml-[52px]">
        {imgUrl && (
          <img
            className="rounded-[10px] max-w-full max-h-[392px] cursor-pointer"
            src={imgUrl}
            alt="generated"
            onClick={handleImageClick}
          />
        )}
      </div>

      {imgUrl && isOverlayVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="p-4 bg-transparent rounded-[10px]">
            <img
              className="rounded-[10px] max-w-full max-h-screen cursor-pointer"
              src={imgUrl}
              alt="generated"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotMsg;

type ChatBotMsgProps = {
  msg: string;
  imgUrl?: string | null | undefined;
  error?: boolean;
  loading?: boolean | undefined;
};
