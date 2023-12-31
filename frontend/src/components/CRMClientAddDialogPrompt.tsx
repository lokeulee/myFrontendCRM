"use client";
import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { Add, CloudUpload } from "@mui/icons-material";
import { Client } from "@/types/clientType";

interface CRMClientAddDialogPromptProps {
  clients: Client[];
  onSetClients: (newClientsArray: Client[]) => void;
}

export default function CRMClientAddDialogPrompt({
  clients,
  onSetClients,
}: CRMClientAddDialogPromptProps) {
  const [state, setState] = useState({
    name: "",
    number: 0,
    organization: "",
    assignedUser: "",
    avatar: "",
  });

  const handleNameChange = (event: any) => {
    if (event) setState({ ...state, name: event.target.value });
  };

  const handleNumberChange = (event: any) => {
    if (event) setState({ ...state, number: event.target.value });
  };

  const handleOrganizationChange = (event: any) => {
    if (event) setState({ ...state, organization: event.target.value });
  };

  const handleUserAssignedChanged = (event: any) => {
    if (event) setState({ ...state, assignedUser: event.target.value });
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleAddClient() {
    onSetClients([
      ...clients,
      {
        ID: clients.length + 1,
        contactNum: state.number,
        name: state.name,
        avatar: "https://example.com/avatar_3.png",
        organization: state.organization,
        assignedUser: state.assignedUser,
        isActive: true,
        creationDate: new Date(),
      },
    ]);
    handleNameChange("");
    handleNumberChange("");
    handleOrganizationChange("");
    handleClose();
  }

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <Add />
      </IconButton>
      <Dialog fullWidth maxWidth="xs" open={open} onClose={handleClose}>
        <DialogTitle>Adding Client Prompt</DialogTitle>
        <DialogContent>
          <DialogContentText>Please key in Client details</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Client Name"
            fullWidth
            variant="standard"
            value={state.name}
            onChange={handleNameChange}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Number"
            fullWidth
            variant="standard"
            value={state.number}
            onChange={handleNumberChange}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Organization"
            fullWidth
            variant="standard"
            value={state.organization}
            onChange={handleOrganizationChange}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Assigned User"
            fullWidth
            variant="standard"
            value={state.assignedUser}
            onChange={handleUserAssignedChanged}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddClient}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
