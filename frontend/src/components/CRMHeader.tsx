"use client";

import { Box } from "@mui/material";

export default function CRMHeader() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={4}
      p={2}
      bgcolor={"lightblue"}
      border={1}
      width="auto"
    >
      Clients
    </Box>
  );
}
