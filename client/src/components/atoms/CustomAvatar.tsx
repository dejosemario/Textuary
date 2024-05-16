import { FC } from "react";
const CustomAvatar: FC<CustomAvatarProps> = ({ src, size = 32, onClick }) => {
  return (
    <div
      className={`relative rounded-full cursor-pointer`}
      style={{
        width: size,
        height: size,
        border: "1px solid transparent",
        background:
          "linear-gradient(#090600, #090600) padding-box, linear-gradient(109.15deg, #FBDA61 0%, #FF5ACD 100%) border-box",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <div className="w-full h-full bg-[#090600] rounded-full flex items-center justify-center overflow-hidden">
        {src && (
          <img
            className={`w-full h-full object-cover rounded-full`}
            alt="Avatar"
            src={src}
          />
        )}
      </div>
    </div>
  );
};

export default CustomAvatar;

interface CustomAvatarProps {
  src?: string;
  size?: number;
  type?: string;
  avatarClasses?: string;
  wrapperClasses?: string;
  onClick?: () => void;
}
