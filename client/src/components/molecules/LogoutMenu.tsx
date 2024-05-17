import { useNavigate } from "react-router-dom";

const LogoutMenu = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    // Remove user profile data from local storage
    localStorage.removeItem("user");
    
    navigate("/login");
  };

  return (
    <div className="absolute top-[70px] sm:top-[120px] w-[263px] sm:w-[176px] border-[#262626] border-[1px] border-solid bg-[#1A1A1A] rounded-[10px] px-[20px] py-[20px] text-[#fefefe]">
      <div
        onClick={handleLogout}
        className="cursor-pointer border-[#262626] border-[1px] border-solid rounded-[10px] px-[8px] py-[8px] text-ellipsis w-full overflow-hidden whitespace-nowrap text-sm text-center"
      >
        Logout
      </div>
    </div>
  );
};

export default LogoutMenu;
