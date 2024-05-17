import CustomAvatar from "../atoms/CustomAvatar";
import menu from "../../assets/hamburger.svg";
import CustomButton from "../atoms/CustomButton/CustomButton";
import { Add } from "iconsax-react";
import Logo from "../atoms/Logo";
import HistoryPane from "../molecules/HistoryPane";
import { FC, useRef, useState } from "react";
import LogoutMenu from "../molecules/LogoutMenu";
import useClickAway from "../../hooks/UseClickAway";

const Header: FC<HeaderProps> = ({ handleNewChat }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // eslint-disable-next-line
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const historyPaneRef = useRef<HTMLDivElement>(null);
  const logoutMenuRef = useRef<HTMLDivElement>(null);

  const handleToggleHistoryMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggleAvatarMenu = () => {
    setIsAvatarOpen((prevIsAvatarOpen) => !prevIsAvatarOpen);
  };

  useClickAway(historyPaneRef, () => {
    if (isMenuOpen) setIsMenuOpen(false);
  });

  useClickAway(logoutMenuRef, () => {
    if (isAvatarOpen) setIsAvatarOpen(false);
  });

  return (
    <header onClick={handleNewChat} className="w-full flex justify-center">
      <div className="flex justify-between item-center sm:max-w-[734px] max-w-full sm:w-full w-full sm:bg-[#1A1A1A] bg-transparent rounded-[49px] p-0 sm:p-[20px]">
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

      <div ref={historyPaneRef} className="flex justify-end">
        {isMenuOpen && (
          <HistoryPane onToggleHistoryMenu={handleToggleHistoryMenu} />
        )}
      </div>

      <div ref={logoutMenuRef} className="flex justify-end">
        {isAvatarOpen && <LogoutMenu />}
      </div>
    </header>
  );
};

export default Header;

type HeaderProps = {
  handleNewChat: () => void;
};
