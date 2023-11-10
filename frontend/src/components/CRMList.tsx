"use client";
import { Client } from "@/types/client";
import { Add } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, List } from "@mui/material";
import { useState } from "react";

export default function CRMList() {
  const [clients, setClients] = useState<Client[]>([
    {
      clientID: 1,
      contactNum: 1234567890,
      name: "John Doe",
      avatar: "https://example.com/avatar.png",
      organization: "Acme Corporation",
      assignedUser: "Jane Doe",
    },
    {
      clientID: 2,
      contactNum: 9876543210,
      name: "Jane Doe",
      avatar: "https://example.com/avatar_2.png",
      organization: "Acme Corporation",
      assignedUser: "John Doe",
    },
  ]);

  // let signal = useSignal("hello");
  // signal.value = "derp";
  // console.log(signal);

  const addClient = () => {
    setClients([
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
    <Box>
      <List>
        {clients.map((client) => (
          <Box>
            <Box display="flex">
              <Box p={2}>{client.name}</Box>
              <IconButton onClick={addClient}>
                <Add />
              </IconButton>
            </Box>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );
}
