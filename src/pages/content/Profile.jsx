import React from "react";

import { Stack, Typography, Box, CircularProgress } from "@mui/material";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import user from "../../data/user.json";
import img from "../../assets/profile.jpg";

function Profile() {
  return (
    <Stack>
      <Typography
        textAlign={"start"}
        fontWeight={"bold"}
        sx={{ margin: "10px 0" }}
      >
        المعلومات الشخصية
      </Typography>
      <Stack
        direction={"row"}
        width={"100%"}
        justifyContent={"space-between"}
        sx={{
          borderRadius: "16px",
          background: "#fff",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          padding: "32px",
        }}
      >
        <Stack>
          <Box marginTop={"15px"}>
            <Typography textAlign={"start"}>الاسم:</Typography>
            <Typography textAlign={"start"} fontSize={"22px"}>
              محمد عبدالسلام بزنكو
            </Typography>
          </Box>
          <Box marginTop={"15px"}>
            <Typography textAlign={"start"}>الكلية:</Typography>
            <Typography textAlign={"start"} fontSize={"22px"}>
              الهندسة المعلوماتية
            </Typography>
          </Box>
        </Stack>
        <Stack>
          <Box marginTop={"15px"}>
            <Typography textAlign={"start"}>الرقم الجامعي</Typography>
            <Typography textAlign={"start"} fontSize={"22px"}>
              423423423432
            </Typography>
          </Box>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            marginTop={"15px"}
          >
            <Box>
              <Typography textAlign={"start"}>السنة:</Typography>
              <Typography textAlign={"start"} fontSize={"22px"}>
                الثالثة
              </Typography>
            </Box>
            <Box>
              <Typography textAlign={"start"}>الحالة:</Typography>
              <Typography textAlign={"start"} fontSize={"22px"}>
                نشط
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Box
          sx={{
            border: "3px solid black",
            borderRadius: "50%",
            overflow: "hidden",
            width: "200px",
            height: "200px",
          }}
        >
          <img src={img} alt="" width={"100%"} />
        </Box>
      </Stack>
      <Typography
        fontSize={"22px"}
        textAlign={"start"}
        sx={{ margin: "15px 0" }}
      >
        عدد الساعات:
      </Typography>
      <Stack
        direction={"row"}
        width={"100%"}
        justifyContent={"space-between"}
        sx={{
          borderRadius: "4px",
          background: "#fff",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          padding: "32px",
        }}
      >
        <Stack>
          <Typography fontSize={"22px"}>المنجزة: 101</Typography>
          <Typography fontSize={"22px"}>المتبقية: 68</Typography>
          <Typography fontSize={"22px"}>الكامل: 169</Typography>
        </Stack>

        <Box width={"120px"} height={"120px"}>
          <CircularProgressbar
            value={70}
            text={`${70}%`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "16px",
              fontWeight: "bold",
              pathTransitionDuration: 0.5,
              pathColor: `var(--yellow)`,
              textColor: "var(--black)",
              trailColor: "var(--white)",
              backgroundColor: "var(--yellow)",
            })}
          />
        </Box>
      </Stack>
      <Typography
        fontSize={"22px"}
        textAlign={"start"}
        sx={{ margin: "15px 0" }}
      >
        المعدل:
      </Typography>
      <Stack
        direction={"row"}
        width={"100%"}
        justifyContent={"space-between"}
        gap={"10px"}
        sx={{
          borderRadius: "4px",
          background: "#fff",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          padding: "32px",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            width: "100%",
            height: "85px",
            backgroundColor: "var(--blue)",
            color: "var(--white)",
            borderRadius: "8px",
            padding: "16px 20px",
          }}
        >
          <Typography fontSize={"22px"}>المجموع التراكمي:</Typography>
          <Typography fontWeight={"bold"} fontSize={"25px"}>
            87%
          </Typography>
          <Typography fontWeight={"bold"} fontSize={"25px"}>
            3.6pts
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            width: "100%",
            height: "85px",
            backgroundColor: "var(--yellow)",
            color: "var(--black)",
            borderRadius: "8px",
            padding: "16px 20px",
          }}
        >
          <Typography fontSize={"22px"}>المجموع الفصلي:</Typography>
          <Typography fontWeight={"bold"} fontSize={"25px"}>
            53%
          </Typography>
          <Typography fontWeight={"bold"} fontSize={"25px"}>
            2.2pts
          </Typography>
        </Stack>
      </Stack>
      <Typography
        fontSize={"22px"}
        textAlign={"start"}
        sx={{ margin: "15px 0" }}
      >
        الانذارات:
      </Typography>
      <Stack
        width={"100%"}
        gap={"10px"}
        sx={{
          borderRadius: "4px",
          background: "#fff",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          padding: "32px",
        }}
      >
        <Stack
          sx={{
            minHeight: "50px",
            width: "100%",
            backgroundColor: "var(--yellow)",
            color: "var(--black)",
            padding: "10px",
            borderRadius: "4px",
          }}
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Box>ico</Box>
          <Stack alignItems={"flex-start"}>
            <Typography fontSize={"20px"} fontWeight={"bold"}>
              غياب
            </Typography>
            <Typography>رياضيات 1</Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            minHeight: "50px",
            width: "100%",
            backgroundColor: "var(--yellow)",
            color: "var(--black)",
            padding: "10px",
            borderRadius: "4px",
          }}
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Box>ico</Box>
          <Stack alignItems={"flex-start"}>
            <Typography fontSize={"20px"} fontWeight={"bold"}>
              استدراكي
            </Typography>
            <Typography>المعدل 1.99</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Profile;
