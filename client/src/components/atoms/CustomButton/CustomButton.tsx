import { FC, ReactNode } from "react";

const CustomButton: FC<CustomButtonProps> = ({
  children,
  iconBefore,
  iconAfter,
}) => {
  return (
    <button className="flex items-center justify-center px-3 py-2 rounded-[5px] border border-[#007DFC] bg-gradient-to-b from-[#007DFC] to-[#004A96] text-[#FEFEFE] text-base font-normal leading-5">
      {iconBefore && <span className="mr-2">{iconBefore}</span>}
      {children}
      {iconAfter && <span className="ml-2">{iconAfter}</span>}
    </button>
  );
};

export default CustomButton;

interface CustomButtonProps {
  children: ReactNode;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
}
