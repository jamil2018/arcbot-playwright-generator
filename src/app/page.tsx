import InfoDeck from "@/components/info-deck";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div>
      <h1 className="font-bold text-4xl mb-6">Dashboard</h1>
      <InfoDeck
        infoBlocks={[
          {
            title: "Selectors",
            description: "Total added selectors",
            value: 125,
          },
          {
            title: "Steps",
            description: "Total steps created",
            value: 25,
          },
          {
            title: "Templates",
            description: "Total available templates",
            value: 10,
          },
        ]}
      />
    </div>
  );
}
