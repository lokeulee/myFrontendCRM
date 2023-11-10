import CRMMain from "@/components/CRMMain";
import { promises as fs } from "fs";

export default async function Home() {
  // const file = await fs.readFile(process.cwd() + "/src/data/data.json", "utf8");
  // const data = JSON.parse(file);
  // console.log(data);

  // localStorage.setItem("1", myJSON);

  // console.log(localStorage);
  return <CRMMain></CRMMain>;
}
