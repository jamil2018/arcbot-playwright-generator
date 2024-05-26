import { DataTable } from "@/components/data-table";
import PageDescription from "@/components/page-description";
import PageTitle from "@/components/page-title";

export default function Locators() {
  return (
    <div>
      <PageTitle>Locators</PageTitle>
      <PageDescription>Total number of locators added till now</PageDescription>
      <DataTable />
    </div>
  );
}
