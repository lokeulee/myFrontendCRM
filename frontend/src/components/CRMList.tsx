"use client";
import { Client } from "@/types/client";
import { Add, MoreVert } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, IconButton, List } from "@mui/material";
import { useState } from "react";

interface CRMListProps {
  clients: Client[];
}

export default function CRMList({ clients }: CRMListProps) {
  // let signal = useSignal("hello");
  // signal.value = "derp";
  // console.log(signal);

  return (
    <Box>
      <List>
        {clients.map((client) => (
          <Box>
            <Box display="flex" align-items="center" justifyContent="center">
              <Box marginTop={0.5}>
                <Avatar alt={client.name}></Avatar>
              </Box>
              <Box p={2}>{client.name}</Box>
              <IconButton>
                <MoreVert />
              </IconButton>
            </Box>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );
}
