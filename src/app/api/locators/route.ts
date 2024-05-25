import { getAllJsonFileContentInDirectory } from "@/utils/jsonFile.util";
import { getFullFilePath } from "@/utils/path.util";

export async function GET() {
  const directory = getFullFilePath(process.env.LOCATOR_PATH);
  const content = await getAllJsonFileContentInDirectory(
    directory.replace(/\\/g, "/")
  );
  return content;
}
