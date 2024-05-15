import Header from "../organisms/Header";
import bgImg from "../../assets/logo-bg-536x536.png";
import ImageGenerateBox from "../molecules/ImageGenerateBox";
import HowCanIHelpSection from "../molecules/HowCanIHelpSection";

export default function HomePage() {
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
        <Header />
        <HowCanIHelpSection />
        <ImageGenerateBox />
      </div>
    </div>
  );
}
