import InfoDeck from "@/components/info-deck";
import { GET } from "./api/locators/count/route";

export default async function Dashboard() {
  const count = await GET();
  return (
    <div>
      <h1 className="font-bold text-4xl mb-6">Dashboard</h1>
      <InfoDeck
        infoBlocks={[
          {
            title: "Selectors",
            description: "Total added selectors",
            value: count,
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
