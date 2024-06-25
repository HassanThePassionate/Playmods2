"use client";
import GamesData from "@/constant/gamesData";
import { Card, CardContent } from "../ui/card";
import AppsHeading from "./AppsHeading";
import GamesList from "./GamesList";
import AppsData from "@/constant/AppsData";
import { useState } from "react";

const AppsCard = () => {
  const [games, setGames] = useState(false);
  return (
    <div>
      <Card className='bg-white mt-5 overflow-hidden'>
        <CardContent className='p-0'>
          <AppsHeading title='Newest >' setGames={setGames} games={games} />
          <div className='p-4'>
            {games ? (
              <GamesList data={GamesData} />
            ) : (
              <GamesList data={AppsData} />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppsCard;
