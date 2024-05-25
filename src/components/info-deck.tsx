import { InfoBlock } from "@/types/InfoDeck";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";

export default function InfoDeck({ infoBlocks }: { infoBlocks: InfoBlock[] }) {
  return (
    <div className="flex justify-start gap-8 ">
      {infoBlocks.map((block, index) => (
        <Card
          className="w-72 border-gray-400 border-muted-foreground bg-transparent flex flex-col justify-between"
          key={index}
        >
          <CardHeader>
            <span className="font-semibold text-sm">{block.title}</span>
            <CardDescription className="text-xs">
              {block.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-4xl font-bold text-primary">
            {block.value}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
