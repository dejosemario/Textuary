import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import logoText from "../../assets/logo-text.svg";
import logo from "../../assets/logo-40x40.svg";

const Logo = ({ url = "/" }) => {
  let navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const logoSrc = isMobile ? logo : logoText;

  return (
    <img
      className="cursor-pointer"
      src={logoSrc}
      onClick={() => navigate(url)}
      alt="logo"
    />
  );
};

export default Logo;
