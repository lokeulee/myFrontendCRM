"use client";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import CRMHeader from "./CRMHeader";
import CRMClientAdd from "./CRMClientAdd";
import CRMList from "./CRMList";
import { Client } from "@/types/clientType";
import { sortingType } from "@/types/sortingType";

interface CRMMainProps {
  data: any;
}

export default function CRMMain({ data }: CRMMainProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  const [sortStatus, setSortStatus] = useState<sortingType>(sortingType.NORMAL);

  console.log(clients);
  useEffect(() => {
    const addData = async () => {
      let localStorageData;

      if (typeof window !== "undefined") {
        localStorageData = localStorage.getItem("ClientData");
      }

      if (localStorageData) {
        const parsed = JSON.parse(localStorageData);
        console.log("Local storage data found!!, setting data");
        setClients([...clients, ...parsed]);
      } else {
        // * Auto populate 5 clients if the client array is empty * //
        // console.log("Local storage data not found, setting data.json");
        // setClients([...clients, ...data]);
      }
    };
    if (clients.length === 0) {
      addData();
    }
  }, []);

  function handleSetClients(newClientsArray: Client[]) {
    setClients(newClientsArray);
  }

  function handleClientSort(status: sortingType) {
    if (status === sortingType.NORMAL) {
      clients.sort((a, b) => a.ID - b.ID);
    }
    if (status === sortingType.STATUS) {
      clients.sort((a, b) => {
        if (a.isActive && !b.isActive) {
          return -1;
        } else if (!a.isActive && b.isActive) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    if (status === sortingType.CREATION) {
      clients.sort((a: any, b: any) => a.creationDate - b.creationDate);
    }
  }

  function handleStatus(status: sortingType) {
    console.log("SORTT");
    setSortStatus(status);
    handleClientSort(status);
  }

  return (
    <Box width={500}>
      <CRMHeader clients={clients} handleStatus={handleStatus}></CRMHeader>
      <CRMClientAdd
        clients={clients}
        onSetClients={handleSetClients}
      ></CRMClientAdd>
      <CRMList clients={clients} onSetClients={handleSetClients}></CRMList>
    </Box>
  );
}
