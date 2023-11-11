"use client";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import CRMHeader from "./CRMHeader";
import CRMClientAdd from "./CRMClientAdd";
import CRMList from "./CRMList";
import { Client } from "@/types/client";

interface CRMMainProps {
  data: any;
}

export default function CRMMain({ data }: CRMMainProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  // const [isSortByStatus, setisSortByStatus] = useState<boolean>(false);
  // const [isSortByCreation, setisSortByStatus] = useState<boolean>(false);
  useEffect(() => {
    const addData = async () => {
      console.log("add Data Called !");
      setClients([...clients, ...data]);
    };
    if (clients.length === 0) {
      addData();
    }
  }, []);

  function handleSetClients(newClientsArray: Client[]) {
    setClients(newClientsArray);
  }

  return (
    <Box width={500}>
      <CRMHeader clients={clients}></CRMHeader>
      <CRMClientAdd
        clients={clients}
        onSetClients={handleSetClients}
      ></CRMClientAdd>
      <CRMList clients={clients} onSetClients={handleSetClients}></CRMList>
    </Box>
  );
}
