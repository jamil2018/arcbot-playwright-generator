import { getTotalNumberOfKeysInAllJsonFiles } from "@/utils/json-file-util";
import { getFullFilePath } from "@/utils/path.util";

export async function GET() {
  const directory = getFullFilePath(process.env.LOCATOR_PATH);
  const countInFiles = await getTotalNumberOfKeysInAllJsonFiles(directory);
  return countInFiles;
}
