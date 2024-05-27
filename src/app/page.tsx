import InfoDeck from "@/components/info-deck";
import { GET } from "./api/locators/count/route";
import PageTitle from "@/components/page-title";

export default async function Dashboard() {
  const count = await GET();
  return (
    <div>
      <PageTitle className="mb-6">Dashboard</PageTitle>
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
