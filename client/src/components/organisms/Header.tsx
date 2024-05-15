import CustomAvatar from "../atoms/CustomAvatar";
import menu from "../../assets/hamburger.svg";
import CustomButton from "../atoms/CustomButton/CustomButton";
import { Add } from "iconsax-react";
import Logo from "../atoms/Logo";

const Header = () => (
  <header className="flex justify-between item-center w-[734px] bg-[#1A1A1A] rounded-[49px] p-[20px]">
    <Logo />
    <CustomButton iconBefore={<Add size="18" color="#FEFEFE" />}>
      New Chat
    </CustomButton>
    <div className="flex justify-between items-center gap-3">
      <CustomAvatar size={40} />
      <img src={menu} alt="hamburger" />
    </div>
  </header>
);
export default Header;
