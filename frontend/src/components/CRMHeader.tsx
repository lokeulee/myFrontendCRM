import { Client } from "@/types/client";
import { FormatAlignJustify } from "@mui/icons-material";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { MouseEvent, useState } from "react";

interface CRMHeaderProps {
  clients: Client[];
}

export default function CRMHeader({ clients }: CRMHeaderProps) {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

  function handleSaveData() {
    console.log("------SAVE DATA!!!-----");
    const saveData = JSON.stringify(clients);
    localStorage.setItem("ClientData", saveData);
    handleClose();
  }

  return (
    <Box>
      <Box display="flex" gap={4} p={2} bgcolor={"lightblue"} border={1}>
        <Box m="auto">Client</Box>
        <IconButton onClick={handleClick}>
          <FormatAlignJustify />
        </IconButton>
      </Box>
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
        <MenuItem onClick={handleSaveData}>Save Data</MenuItem>
        {/* <MenuItem onClick={handleFilter}>Sort By Active</MenuItem> */}
      </Menu>
    </Box>
  );
}
