import { ChangeEvent } from "react";

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  name,
  type = "text",
  onChange,
}) => {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <input
        className="w-full border border-[rgba(254,254,254,0.1)] rounded-[10px] px-[20px] py-[16px] bg-[transparent]"
        placeholder={placeholder}
        value={value}
        name={name}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;

interface CustomInputProps {
  label: string;
  placeholder: string;
  value: string;
  name?: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
