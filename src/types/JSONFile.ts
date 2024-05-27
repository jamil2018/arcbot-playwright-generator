export type JSONFile = {
  [key: string]:
    | Record<string, string>
    | Record<string, number>
    | Record<string, boolean>;
};
