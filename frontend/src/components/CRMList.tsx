"use client";
import { Client } from "@/types/client";
import { Add, MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  Menu,
  MenuItem,
} from "@mui/material";
import { MouseEvent, useState } from "react";

interface CRMListProps {
  clients: Client[];
  onSetClients: (newClientsArray: Client[]) => void;
}

export default function CRMList({ clients, onSetClients }: CRMListProps) {
  // let signal = useSignal("hello");
  // signal.value = "derp";
  // console.log(signal);
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [currentClientID, setCurrentClientID] = useState<number>(0);
  const open = Boolean(anchorElement);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

  function handleInactive() {
    const client = clients.find((client) => client.ID === currentClientID);

    if (client) {
      client.isActive === false
        ? (client.isActive = true)
        : (client.isActive = false);
      onSetClients([...clients]);
    } else {
      console.log("ERROR: CLIENT DOESN'T EXIST");
    }
    setAnchorElement(null);
  }

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
              <Box p={2}>
                {client.isActive === true ? "Active" : "Inactive"}
              </Box>
              <IconButton
                onClick={(event: any) => {
                  setCurrentClientID(client.ID);
                  handleClick(event);
                }}
              >
                <MoreVert />
              </IconButton>
            </Box>
            <Divider />
          </Box>
        ))}
      </List>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorElement}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>View Client Details</MenuItem>
        <MenuItem onClick={handleInactive}>Set as inactive</MenuItem>
      </Menu>
    </Box>
  );
}
