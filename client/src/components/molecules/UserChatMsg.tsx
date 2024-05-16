import CustomAvatar from "../atoms/CustomAvatar";
import Typography from "../atoms/Typography";

const UserChatMsg = ({ msg }: { msg: string }) => {
  return (
    <div className="w-[524px] flex gap-[10.5px]">
      <CustomAvatar />
      <div className="flex flex-col gap-1">
        <Typography>You</Typography>
        <Typography>{msg}</Typography>
      </div>
    </div>
  );
};

export default UserChatMsg;
