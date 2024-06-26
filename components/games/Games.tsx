"use client";
import gamesData from "@/constant/gamesData";
import { Card, CardContent } from "../ui/card";
import GamesHeading from "./GamesHeading";
import GamesList from "./GamesList";
import GameCard from "./GameCard";
import AppsCard from "./AppsCard";

interface GamesSectionProps {
  heading: string;
  data: typeof gamesData;
}

const GamesCategoryCard = ({ heading, data }: GamesSectionProps) => (
  <Card className='bg-white mt-5 overflow-hidden '>
    <CardContent className='p-[40px]'>
      <GamesHeading text={heading} />
      <div>
        <GamesList data={data} />
      </div>
    </CardContent>
  </Card>
);

const Games = () => {
  const sections = [
    { heading: "Mods inside", data: gamesData },
    { heading: "Pre-registration Games", data: gamesData },
  ];

  return (
    <>
      <GameCard title='Recommended' />
      <AppsCard />
      {sections.map((section, index) => (
        <GamesCategoryCard
          key={index}
          heading={section.heading}
          data={section.data}
        />
      ))}
      <GameCard title="Players' Favorite" />
      <AppsCard />
    </>
  );
};

export default Games;
