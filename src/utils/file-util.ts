import { readFile } from "fs/promises";

export const readFileContent = async (directory: string) => {
  const buffer = await readFile(directory, "utf-8");
  const content = JSON.parse(buffer);
  return content;
};
