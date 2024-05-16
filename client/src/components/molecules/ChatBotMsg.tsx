import CustomAvatar from "../atoms/CustomAvatar";
import Typography from "../atoms/Typography";
import logo from "../../assets/logo-40x40.svg";

const ChatBotMsg = ({ msg, imgUrl }: { msg: string; imgUrl: string }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-ful flex gap-[10.5px]">
        <img src={logo} alt="logo" />
        <div className="flex flex-col gap-1">
          <Typography>You</Typography>
          <Typography>{msg}</Typography>
        </div>
      </div>

      <div className="max-w-full ml-[52px]">
        <img className="rounded-[10px]" src={imgUrl} alt="generated image" />
      </div>
    </div>
  );
};

export default ChatBotMsg;
