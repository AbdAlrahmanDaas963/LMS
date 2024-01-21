import React from "react";

import { Stack } from "@mui/material";

function MyPaper({ children }) {
  return (
    <Stack
      sx={{
        borderRadius: "4px",
        background: "#FFF",
        boxShadow:
          "0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.20)",
        padding: "15px",
      }}
    >
      {children}
    </Stack>
  );
}

export default MyPaper;
