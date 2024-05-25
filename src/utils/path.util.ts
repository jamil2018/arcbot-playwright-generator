import path from "path";

export const getFullFilePath = (relativePath?: string) => {
  if (relativePath) {
    return path.join(process.cwd(), relativePath).replace(/\\/g, "/");
  }
  return process.cwd().replace(/\\/g, "/");
};
