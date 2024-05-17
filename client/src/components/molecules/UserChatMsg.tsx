import CustomAvatar from "../atoms/CustomAvatar";

const UserChatMsg = ({ msg }: { msg: string }) => {
  return (
    <div className="w-full md:w-[524px] flex items-start gap-[10.5px]">
      <CustomAvatar size={40} />
      <div className="flex flex-col gap-[14.5px] mt-[10px]">
        <p className="leading-5 font-[600] text-[1rem] text-light">You</p>
        <p className="flex gap-3 leading-5 font-[400] text-[1rem] text-light">
          {msg}
        </p>
      </div>
    </div>
  );
};

export default UserChatMsg;
