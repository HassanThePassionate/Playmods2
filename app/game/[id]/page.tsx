"use client";
import { useParams } from "next/navigation";
import data from "@/constant/gamesData";
import GamesCard from "@/components/GameCard/GamesCard";
import HistoryVersion from "@/components/historyVersion/HistoryVersion";
import AppsCard from "@/components/games/AppsCard";
import GameCard from "@/components/games/GameCard";
import CommentBox from "@/components/commentBox/CommentBox";

const Page = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id.toString() === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <GamesCard img={item.img} title={item.name} rate={item.rates} />
      <HistoryVersion title={item.name} />
      <AppsCard />
      <GameCard title='Recommended' />
      <CommentBox />
    </div>
  );
};

export default Page;
