import CustomAvatar from "../atoms/CustomAvatar";
import menu from "../../assets/hamburger.svg";
import CustomButton from "../atoms/CustomButton/CustomButton";
import { Add } from "iconsax-react";
import Logo from "../atoms/Logo";
import HistoryPane from "../molecules/HistoryPane";
import { FC, useState } from "react";
import LogoutMenu from "../molecules/LogoutMenu";

const Header: FC<HeaderProps> = ({ handleNewChat }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // eslint-disable-next-line
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const handleToggleHistoryMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggleAvatarMenu = () => {
    setIsAvatarOpen((prevIsAvatarOpen) => !prevIsAvatarOpen);
  };

  return (
    <header onClick={handleNewChat}>
      <div className="flex justify-between item-center sm:max-w-[734px] max-w-[100%] md:w-[734px] w-screen md:bg-[#1A1A1A] bg-transparent rounded-[49px] p-4 md:p-[20px]">
        <Logo />

        <CustomButton iconBefore={<Add size="18" color="#FEFEFE" />}>
          New Chat
        </CustomButton>

        <div className="flex justify-between items-center gap-3">
          <CustomAvatar size={40} onClick={handleToggleAvatarMenu} />
          <img
            src={menu}
            alt="hamburger"
            onClick={handleToggleHistoryMenu}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="flex justify-end">
        {isMenuOpen && (
          <HistoryPane onToggleHistoryMenu={handleToggleHistoryMenu} />
        )}
      </div>

      <div className="flex justify-end">{isAvatarOpen && <LogoutMenu />}</div>
    </header>
  );
};

export default Header;

type HeaderProps = {
  handleNewChat: () => void;
};
