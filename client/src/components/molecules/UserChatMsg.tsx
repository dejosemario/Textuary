import CustomAvatar from "../atoms/CustomAvatar";
import Typography from "../atoms/Typography";

const UserChatMsg = ({ msg }: { msg: string }) => {
  return (
    <div className="w-[524px] flex items-start gap-[10.5px]">
      <CustomAvatar size={40} />
      <div className="flex flex-col gap-1 mt-[10px]">
        <Typography>You</Typography>
        <Typography>{msg}</Typography>
      </div>
    </div>
  );
};

export default UserChatMsg;
