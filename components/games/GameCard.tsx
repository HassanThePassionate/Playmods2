import GamesData from "@/constant/gamesData";
import { Card, CardContent } from "../ui/card";
import GamesHeading from "./GamesHeading";
import GamesList from "./GamesList";
interface GameCardProps {
  title: string;
}
const GameCard = ({ title }: GameCardProps) => {
  return (
    <div>
      <Card className='bg-white mt-5 overflow-hidden '>
        <CardContent className='p-[40px]'>
          <GamesHeading text={title} />
          <div>
            <GamesList data={GamesData} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameCard;
