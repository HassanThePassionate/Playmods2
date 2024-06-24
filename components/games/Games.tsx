"use client";
import gamesData from "@/constant/gamesData";
import appsData from "@/constant/AppsData";
import { Card, CardContent } from "../ui/card";
import GamesHeading from "./GamesHeading";
import GamesList from "./GamesList";
import AppsHeading from "./AppsHeading";
import { useState } from "react";
import Collections from "./collections/Collection";

interface GamesSectionProps {
  heading: string;
  data: typeof gamesData;
}
interface GameCardProps {
  title: string;
}

const TopGameCard = ({ title }: GameCardProps) => (
  <Card className="bg-white mt-5 overflow-hidden">
    <CardContent className="p-0">
      <GamesHeading text={title} />
      <div className="p-4">
        <GamesList data={gamesData} />
      </div>
    </CardContent>
  </Card>
);

const AppsCard = ({
  games,
  setGames,
}: {
  games: boolean;
  setGames: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <Card className="bg-white mt-5 overflow-hidden">
    <CardContent className="p-0">
      <AppsHeading title="Newest >" setGames={setGames} games={games} />
      <div className="p-4">
        {games ? <GamesList data={gamesData} /> : <GamesList data={appsData} />}
      </div>
    </CardContent>
  </Card>
);

const GamesCategoryCard = ({ heading, data }: GamesSectionProps) => (
  <Card className="bg-white mt-5 overflow-hidden">
    <CardContent className="p-0">
      <GamesHeading text={heading} />
      <div className="p-4">
        <GamesList data={data} />
      </div>
    </CardContent>
  </Card>
);

const ListCollectionsWrapper = () => (
  <Card className="bg-white mt-5 overflow-hidden">
    <CardContent className="p-0">
      <GamesHeading text="Topic" />
      <div className="p-4">
        <Collections />
      </div>
    </CardContent>
  </Card>
);

const Games = () => {
  const [games, setGames] = useState(true);
  const sections = [
    { heading: "Mods inside", data: gamesData },
    { heading: "Pre-registration Games", data: gamesData },
    { heading: "Pre-registration Games", data: gamesData },
    { heading: "Pre-registration Games", data: gamesData },
  ];

  return (
    <>
      <TopGameCard title="Recommended" />
      <AppsCard games={games} setGames={setGames} />
      {sections.map((section, index) => (
        <GamesCategoryCard
          key={index}
          heading={section.heading}
          data={section.data}
        />
      ))}
      <ListCollectionsWrapper />
      <TopGameCard title="Players' Favorite" />
      <AppsCard games={games} setGames={setGames} />
    </>
  );
};

export default Games;
