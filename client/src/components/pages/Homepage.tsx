import Header from "../organisms/Header";
import bgImg from "../../assets/logo-bg-536x536.png";
import ImageGenerateBox from "../molecules/ImageGenerateBox";
import HowCanIHelpSection from "../molecules/HowCanIHelpSection";
import ChatLayout from "../organisms/ChatLayout";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";

export default function HomePage() {
  const { chatData } = useAppContext();

  useEffect(() => {
    console.log("🚀 ~ HomePage ~ chatData:", chatData);
  }, [chatData]);

  return (
    <div
      className="justify-center w-screen h-screen bg-dark min-h-screen flex"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "37%",
      }}
    >
      <div className="max-w-[906px] w-full px-4 lg:px-0 py-6 md:py-8 h-screen flex flex-col justify-between items-center">
        <Header />
        {chatData.chatActive ? <ChatLayout /> : <HowCanIHelpSection />}
        <ImageGenerateBox />
      </div>
    </div>
  );
}
