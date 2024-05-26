import { Locator } from "@/models/Locator";
import { getAllJsonFileContentInDirectory } from "@/utils/json-file-util";
import { getFullFilePath } from "@/utils/path.util";

const extractLocatorsFromJson = (
  content: Record<string, Record<string, string>>
) => {
  const locators: Locator[] = [];
  Object.keys(content).forEach((key) => {
    const fileName = key;
    const fileContent = content[key];
    Object.keys(fileContent).forEach((name) => {
      locators.push({
        id: crypto.randomUUID(),
        name,
        value: fileContent[name],
        file: fileName,
      });
    });
  });
  return locators;
};

export async function GET() {
  const directory = getFullFilePath(process.env.LOCATOR_PATH);
  const content = await getAllJsonFileContentInDirectory(directory);
  const locators: Locator[] = extractLocatorsFromJson(content);
  return locators;
}
