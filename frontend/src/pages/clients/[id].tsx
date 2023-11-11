import { Client } from "@/types/client";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useRouter } from "next/router";

export default function ClientDetailsPage() {
  const router = useRouter();
  const clientID = router.query.id;

  let localStorageData;
  if (typeof window !== "undefined") {
    localStorageData = localStorage.getItem("ClientData");
  }

  if (localStorageData) {
    const clients = JSON.parse(localStorageData);
    const filtered: Client = clients.find((client: Client) => {
      if (client.ID.toString() === router.query.id) {
        return client;
      }
    });

    return (
      <Box width={500}>
        Details of Client
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Contact number</TableCell>
                <TableCell>Organization</TableCell>
                <TableCell>Activity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{filtered.ID}</TableCell>
                <TableCell>{filtered.name}</TableCell>
                <TableCell>{filtered.contactNum}</TableCell>
                <TableCell>{filtered.organization}</TableCell>
                <TableCell>{filtered.isActive ? "Yes" : "No"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  return <div>The Client is not found</div>;
}
