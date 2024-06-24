import Link from "next/link";

interface AppsHeadingProps {
  title: string;
  setGames: any;
  games: boolean;
}
const AppsHeading = ({ title, setGames, games }: AppsHeadingProps) => {
  const GamesHandler = () => {
    setGames(!games);
  };
  return (
    <div>
      <div className="flex items-center justify-between h-[56px] bg-[#fbfbfb] ">
        <h3 className="text-[18px] relative px-[17px]">{title}</h3>
        <div className="flex items-center gap-4 px-4">
          <span
            className={`text-sm cursor-pointer ${
              games
                ? "underline text-blue-600"
                : "text-[#999] hover:text-[#5342F6]"
            } `}
            onClick={GamesHandler}
          >
            Games
          </span>
          <span
            className={`text-sm cursor-pointer ${
              games
                ? " text-[#999] hover:text-[#5342F6] "
                : "underline text-blue-600"
            } `}
            onClick={GamesHandler}
          >
            Apps
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppsHeading;
