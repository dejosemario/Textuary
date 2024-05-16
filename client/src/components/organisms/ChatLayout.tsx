import Typography from "../atoms/Typography";
import ChatBotMsg from "../molecules/ChatBotMsg";
import UserChatMsg from "../molecules/UserChatMsg";
import sampleImg from "../../assets/sample-ai-img.png";

export default function ChatLayout() {
  return (
    <div className="flex flex-col flex-1 gap-7 w-full my-4 overflow-y-auto">
      <UserChatMsg msg="Generate an image of a man with a blue sky in the background" />
      <ChatBotMsg
        msg="Here os the result of your description."
        imgUrl={sampleImg}
      />
    </div>
  );
}
