"use client";
import { Client } from "@/types/client";
import { Box } from "@mui/material";
import CRMClientAddDialogPrompt from "./CRMClientAddDialogPrompt";

interface CRMClientAddProps {
  clients: Client[];
  onSetClients: (newClientsArray: Client[]) => void;
}

export default function CRMClientAdd({
  clients,
  onSetClients,
}: CRMClientAddProps) {
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
