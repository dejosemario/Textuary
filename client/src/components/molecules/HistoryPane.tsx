import cancelIcon from "../../assets/cancelIcon.svg";
const HistoryPane = ({
  onToggleHistoryMenu,
}: {
  onToggleHistoryMenu: () => void;
}) => {
  return (
    <div className="absolute top-[0] sm:top-[134px] w-[263px] sm:w-[223px] h-[100%] sm:h-[calc(100%-298px)] border-[#262626] border-[1px] border-solid bg-[#1A1A1A] rounded-[10px] px-[20px] py-[20px] text-[#fefefe]">
      <div className="flex items-center justify-between text-base mb-[20px]">
        <p className="font-normal text-base">Chat History</p>
        <img
          src={cancelIcon}
          alt="cancel icon"
          onClick={onToggleHistoryMenu}
          className="cursor-pointer"
        />
      </div>
      <div>
        <p className="font-normal text-xs mb-[12px] text-[#888888]">Today</p>
        <div className="flex flex-col gap-[8px] ">
          <div className="border-[#262626] border-[1px] border-solid rounded-[10px] px-[8px] py-[8px] text-ellipsis w-full overflow-hidden whitespace-nowrap text-sm">
            A man with a blue sky in the background
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPane;
