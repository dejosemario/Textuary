import { FC } from "react";
const CustomAvatar: FC<CustomAvatarProps> = ({ src, size = 32, onClick }) => {
  return (
    <div
      className={`relative border border-transparent bg-gradient-to-r from-[#FBDA61] to-[#FF5ACD] rounded-full`}
      style={{ width: size, height: size }}
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
