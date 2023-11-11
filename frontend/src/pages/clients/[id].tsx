import { useEffect, useState } from "react";
import { Client } from "@/types/clientType";
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
  const [filtered, setFiltered] = useState<Client | null>(null);

  useEffect(() => {
    const loadClientData = async () => {
      try {
        if (typeof window !== "undefined") {
          const localStorageData = localStorage.getItem("ClientData");

          if (localStorageData) {
            const clients = JSON.parse(localStorageData);
            const filteredClient = clients.find(
              (client: Client) => client.ID.toString() === clientID
            );

            setFiltered(filteredClient);
          }
        }
      } catch (error) {
        console.error("Error loading client data:", error);
      }
    };

    loadClientData();
  }, [clientID]);

  if (!filtered) {
    return <div>The Client is not found</div>;
  }

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
