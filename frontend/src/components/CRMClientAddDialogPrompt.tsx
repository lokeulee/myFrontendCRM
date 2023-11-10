"use client";
import { useState } from "react";
import {
  Box,
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

export default function CRMClientAddDialogPrompt() {
  const [state, setState] = useState({
    name: "",
    number: "",
    organization: "",
    assignedUser: "",
    avatar: "",
  });

  const handleNameChange = (event: any) => {
    setState({ ...state, name: event.target.value });
  };

  const handleNumberChange = (event: any) => {
    setState({ ...state, number: event.target.value });
  };

  const handleOrganizationChange = (event: any) => {
    setState({ ...state, organization: event.target.value });
  };

  const handleUserAssignedChanged = (event: any) => {
    setState({ ...state, organization: event.target.value });
  };

  const handleAvatarChange = (event: any) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      const avatarDataURL = reader.result;

      if (typeof avatarDataURL === "string") {
        setState({ ...state, avatar: avatarDataURL });
      } else {
        console.error("Avatar must be a string");
      }
    };
    reader.readAsDataURL(file);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUpload />}
          >
            Upload Avatar
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
          //   onClick={}
          //   disabled={dialog.actionButtonDisabled}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}