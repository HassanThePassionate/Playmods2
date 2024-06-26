import Games from "@/components/games/Games";
import Sidebar from "@/components/hero/slider/Slider";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <Games />
    </div>
  );
}
