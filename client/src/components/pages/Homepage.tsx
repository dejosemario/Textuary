import Header from "../organisms/Header";
import bgImg from "../../assets/logo-bg-536x536.png";
import ImageGenerateBox from "../molecules/ImageGenerateBox";
import HowCanIHelpSection from "../molecules/HowCanIHelpSection";
import { useState } from "react";
import ChatLayout from "../organisms/ChatLayout";
import { ChatData } from "../../types";

export default function HomePage() {
  const [chatData, setChatData] = useState<ChatData>({
    loading: false,
    chatActive: false,
    chatBotMessage: null,
    currentConversationId: "",
    messagesList: [],
    chatHistory: {},
  });

  const handleNewChat = () => {
    setChatData((prevData) => ({
      ...prevData,
      loading: false,
      chatActive: false,
      chatBotMessage: "",
      currentConversationId: "",
      messagesList: [],
    }));
  };

  return (
    <div
      className="w-full h-screen bg-[#0A0A0A] min-h-screen flex"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "536px",
      }}
    >
      <div className="w-[906px] mx-auto pt-12 pb-7 flex flex-col justify-between items-center">
        <Header handleNewChat={handleNewChat} />

        {!chatData.chatActive && <HowCanIHelpSection />}
        {chatData.chatActive && <ChatLayout />}

        <ImageGenerateBox chatData={chatData} setChatData={setChatData} />
      </div>
    </div>
  );
}
