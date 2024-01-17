import React from "react";

import { Stack, Typography, Button, Box } from "@mui/material";
import Divider from "@mui/material/Divider";

import { Link } from "react-router-dom";

function Quizzes() {
  return (
    <Stack
      sx={{
        borderRadius: "4px",
        background: "#fff",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        padding: "32px",
      }}
      alignItems={"flex-start"}
    >
      <Typography
        textAlign={"start"}
        fontWeight={"bold"}
        sx={{ marginBottom: "20px" }}
      >
        الاختبارات
      </Typography>
      <Stack sx={{ width: "100%" }}>
        {[1, 2, 3, 4, 5].map((value) => (
          <Stack
            key={value}
            direction={"row"}
            justifyContent={"space-between"}
            width={"100%"}
            sx={{ margin: "5px 0", position: "relative" }}
          >
            <Typography>اسم المادة</Typography>
            <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
              <Typography sx={{ color: "var(--whitesecondary)" }}>
                يقدم في 26/1/2024
              </Typography>
              <Link>
                <Button>التفاصيل</Button>
              </Link>
            </Stack>
            <Box
              sx={{
                position: "absolute",
                bottom: "0",
                height: "1px",
                width: "100%",
                backgroundColor: "var(--whitesecondary)",
                opacity: "0.2",
              }}
            />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Quizzes;
