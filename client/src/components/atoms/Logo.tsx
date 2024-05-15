import { useNavigate } from "react-router-dom";
import logoText from "../../assets/logo-text.svg";

const Logo = ({ url = "/" }) => {
  let navigate = useNavigate();

  return (
    <img
      className="pointer"
      src={logoText}
      onClick={() => navigate(url)}
      alt="logo"
    />
  );
};

export default Logo;
