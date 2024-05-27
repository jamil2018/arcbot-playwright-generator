import PageDescription from "@/components/page-description";
import PageTitle from "@/components/page-title";
import { Locator } from "@/models/Locator";
import { GET } from "../api/locators/route";
import { LocatorsDataTable } from "@/components/data-tables/locator-data-table";

export default async function Locators() {
  const locators: Locator[] = await GET();
  return (
    <div>
      <div className="mb-6">
        <PageTitle>Locators</PageTitle>
        <PageDescription>
          Total number of locators added till now
        </PageDescription>
      </div>
      <LocatorsDataTable data={locators} />
    </div>
  );
}
