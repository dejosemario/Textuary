import { FC } from "react";
import ChatBotMsg from "../molecules/ChatBotMsg";
import UserChatMsg from "../molecules/UserChatMsg";
import { ChatData } from "../../types";
import loader from "../../assets/tinyLoader.gif";

const ChatLayout: FC<ChatLayoutProps> = ({ chatData }) => {
  const { messagesList } = chatData;

  if (!messagesList) return null;

  return (
    <div className="flex flex-col flex-1 gap-7 w-full my-4 overflow-y-auto">
      {messagesList?.map((msg, i) => {
        if (msg.sender === "user") {
          return <UserChatMsg key={i} msg={msg.content} />;
        } else if (msg.sender === "model") {
          return <ChatBotMsg key={i} msg={msg.content} imgUrl={msg.imageUrl} />;
        }
        return null;
      })}
      {(chatData.loading === "generating" ||
        chatData.loading === "translating") && (
        <div className="flex gap-1">
          <img className="w-[18px] h-[18px]" src={loader} alt="loading" />
          {chatData.loading === "translating" && (
            <ChatBotMsg msg="Translating Prompt" />
          )}

          {chatData.loading === "generating" && (
            <ChatBotMsg msg="Generating Image" />
          )}
        </div>
      )}
      {chatData.loading === "error" && (
        <ChatBotMsg error={true} msg="Error encountered" />
      )}
    </div>
  );
};

export default ChatLayout;

type ChatLayoutProps = {
  chatData: ChatData;
};
