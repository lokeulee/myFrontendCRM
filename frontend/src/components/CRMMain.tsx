"use client";
import { Box } from "@mui/material";
import { useState } from "react";
import CRMHeader from "./CRMHeader";
import CRMClientAdd from "./CRMClientAdd";
import CRMList from "./CRMList";
import { Client } from "@/types/client";

export default function CRMMain() {
  const [openDialog, setOpenDialog] = useState(false);
  const [clients, setClients] = useState<Client[]>([
    {
      ID: 1,
      contactNum: 1234567890,
      name: "John Doe",
      avatar: "https://example.com/avatar.png",
      organization: "Acme Corporation",
      assignedUser: "Jane Doe",
      isActive: true,
      creationDate: new Date(),
    },
    {
      ID: 2,
      contactNum: 9876543210,
      name: "Jane Doe",
      avatar: "https://example.com/avatar_2.png",
      organization: "Acme Corporation",
      assignedUser: "John Doe",
      isActive: true,
      creationDate: new Date(),
    },
  ]);

  console.log("Here : ");
  console.log(clients.length + "\n");

  function handleSetClients(newClientsArray: Client[]) {
    setClients(newClientsArray);
  }

  return (
    <Box width={500}>
      <CRMHeader></CRMHeader>
      <CRMClientAdd
        clients={clients}
        onSetClients={handleSetClients}
      ></CRMClientAdd>
      <CRMList clients={clients} onSetClients={handleSetClients}></CRMList>
    </Box>
  );
}
