import { FC } from "react";
import ChatBotMsg from "../molecules/ChatBotMsg";
import UserChatMsg from "../molecules/UserChatMsg";
import { useAppContext } from "../../context/AppContext";

const ChatLayout: FC<ChatLayoutProps> = () => {
  const { chatData } = useAppContext();
  const { messagesList } = chatData;

  if (!messagesList) return null;

  return (
    <div className="scrollable-container flex flex-col flex-1 gap-7 w-full mt-[50px] mb-4 overflow-y-auto">
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
        <>
          {chatData.loading === "translating" && (
            <ChatBotMsg msg="Translating Prompt" loading={true} />
          )}

          {chatData.loading === "generating" && (
            <ChatBotMsg msg="Generating Image" loading={true} />
          )}
        </>
      )}

      {chatData.loading === "error" && (
        <ChatBotMsg error={true} msg="Error encountered" />
      )}
    </div>
  );
};

export default ChatLayout;

type ChatLayoutProps = {};
