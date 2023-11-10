"use client";
import { Client } from "@/types/client";
import { Box } from "@mui/material";
import { useState } from "react";
import CRMClientAddDialogPrompt from "./CRMClientAddDialogPrompt";

interface CRMClientAddProps {
  clients: Client[];
  onSetClients: (newClientsArray: Client[]) => void;
}

export default function CRMClientAdd({
  clients,
  onSetClients,
}: CRMClientAddProps) {
  const addClient = () => {
    onSetClients([
      ...clients,
      {
        clientID: 3,
        contactNum: 1111111111,
        name: "New Client",
        avatar: "https://example.com/avatar_3.png",
        organization: "Acme Corporation",
        assignedUser: "John Doe",
      },
    ]);
  };

  return (
    <Box display="flex" border={1} align-items="center" justifyContent="center">
      <Box display="flex" p={2}>
        Add Client
      </Box>
      <CRMClientAddDialogPrompt
        clients={clients}
        onSetClients={onSetClients}
      ></CRMClientAddDialogPrompt>
    </Box>
  );
}
