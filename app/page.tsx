import Games from "@/components/games/Games";
import Sidebar from "@/components/hero/slider/Slider";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <Alert variant="destructive" className="mt-6">
        <AlertDescription>
          PlayMods.net is the only official website of PlayMods App. Please do
          not visit other fake url
        </AlertDescription>
      </Alert>
      <Games />
    </div>
  );
}
