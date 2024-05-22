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
      <div className="flex justify-start gap-8 ">
        <Card className="w-72 border-gray-400 border-muted-foreground bg-transparent flex flex-col justify-between">
          <CardHeader>
            <span className="font-semibold text-sm">Steps</span>
            <CardDescription className="text-xs">
              Total number of step definitions inside the framework
            </CardDescription>
          </CardHeader>
          <CardContent className="text-4xl font-bold">43</CardContent>
        </Card>
        <Card className="w-72 border-gray-400 border-muted-foreground bg-transparent flex flex-col justify-between">
          <CardHeader>
            <span className="font-semibod text-sm">Templates</span>
            <CardDescription className="text-xs">
              Total number of templates created so far
            </CardDescription>
          </CardHeader>
          <CardContent className="text-4xl font-bold">25</CardContent>
        </Card>
      </div>
    </div>
  );
}
