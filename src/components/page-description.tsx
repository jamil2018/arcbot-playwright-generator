export default function PageDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-xs text-muted-foreground">{children}</p>;
}
