import CRMMain from "@/components/CRMMain";
import { promises as fs, writeFileSync } from "fs";

export async function saveClientToJSON(filePath: string, saveData: string) {
  writeFileSync(filePath, saveData);
}

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/data/data.json", "utf8");
  const data = JSON.parse(file);

  return <CRMMain data={data}></CRMMain>;
}
