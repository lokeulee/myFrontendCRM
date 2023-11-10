import CRMList from "@/components/CRMList";
import { Box } from "@mui/material";
import { promises as fs } from "fs";

export default async function Home() {
  // const file = await fs.readFile(process.cwd() + "/src/data/data.json", "utf8");
  // const data = JSON.parse(file);
  // console.log(data);

  // localStorage.setItem("1", myJSON);

  // console.log(localStorage);

  return (
    <Box>
      <CRMHeader></CRMHeader>
      <CRMList></CRMList>
    </Box>
  );
}
