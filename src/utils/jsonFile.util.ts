import { JSONFile } from "@/types/JSONFile";
import { glob } from "glob";
import path from "path";
import { readFileContent } from "./file.util";
import { JSONFileSignature } from "@/constants/fileSignature";

export const getFileDirectories = async (directory: string) => {
  const files = await glob(directory);
  return files;
};

export const getFileNames = async (directory: string) => {
  const files = await getFileDirectories(directory + JSONFileSignature);
  return files.map((file) => path.basename(file));
};

export const getKeyCountInAllJsonInsideDirectory = async (
  directory: string
) => {
  const files = await getFileDirectories(directory + JSONFileSignature);
  const keyCounts = await Promise.all(
    files.map(async (file) => {
      const jsonPath = path.resolve(file.replace(/\\/g, "/"));
      const json = await readFileContent(jsonPath);
      return {
        fileName: path.basename(jsonPath),
        totalKeys: Object.keys(json).length,
      };
    })
  );
  return keyCounts;
};

export const getTotalNumberOfKeysInAllJsonFiles = async (directory: string) => {
  const files = await getKeyCountInAllJsonInsideDirectory(directory);
  return files.reduce((acc, file) => acc + file.totalKeys, 0);
};

export const getAllJsonFileContentInDirectory = async (directory: string) => {
  const files = await getFileDirectories(directory + JSONFileSignature);
  const jsonFiles: JSONFile = {};
  await Promise.all(
    files.map(async (file) => {
      const jsonPath = path.resolve(file.replace(/\\/g, "/"));
      const jsonFileName = path.basename(jsonPath).replace(".json", "");
      const jsonContent = await readFileContent(jsonPath);
      jsonFiles[jsonFileName] = jsonContent;
    })
  );
  return jsonFiles;
};
