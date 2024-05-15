import { ChangeEvent } from "react";

interface CustomInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <input
        className="w-full border border-[rgba(254,254,254,0.1)] rounded-[10px] px-[20px] py-[16px] bg-[transparent]"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
