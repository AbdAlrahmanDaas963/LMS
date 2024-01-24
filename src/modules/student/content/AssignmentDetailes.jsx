import React from "react";
import { useLocation } from "react-router-dom";

import { Stack, Button, Typography, Box, Divider } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import BackButton from "../../../components/BackButton";

const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

function AssignmentDetailes() {
  const { state } = useLocation();
  console.log("state :>> ", state);

  // if (!state || !state.assignment) {
  //   return <div>No Assignment details available.</div>;
  // }

  // const { title, deadline, id, detailes } = state.assignment;
  // console.log("state :>> ", state);
  // console.log("detailes :>> ", detailes);

  return (
    <Stack>
      <BackButton />
      <Stack
        sx={{
          backgroundColor: "#fff",
          borderRadius: "15px",
          padding: "50px",
          width: "100%",
          minHeight: "50vh",
          boxShadow:
            "0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.20)",
        }}
        justifyContent={"space-between"}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ marginBottom: "30px" }}
        >
          <Stack alignItems={"flex-start"}>
            <Typography fontWeight={"bold"}>هندسة البرمجيات</Typography>
            <Typography sx={{ color: "var(--whitesecondary)" }}>
              الوظيفة 1
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={"10px"}>
            <Typography sx={{ color: "var(--whitesecondary)" }}>
              حتى 26/1/2024
            </Typography>
            <AccessAlarmIcon fontSize="small" />
          </Stack>
        </Stack>
        <Stack justifyContent={"flex-start"} alignItems={"flex-start"}>
          <Typography fontWeight={"bold"}>ملاحظات:</Typography>
          <Typography sx={{ color: "var(--whitesecondary)" }}>
            لا يوجد ملاحظات
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <Button
            variant="outlined"
            sx={{
              gap: "20px",
              marginTop: "50px",
              padding: "12px",
            }}
          >
            <PictureAsPdfIcon fontSize="large" />
            <Typography>تنزيل pdfFile</Typography>
          </Button>
        </Stack>
        <Divider
          sx={{
            height: "2px",
            width: "95%",
            backgroundColor: "black",
            marginTop: "50px",
          }}
        />
        <Stack alignItems={"center"} sx={{ marginTop: "50px" }}>
          <Dragger
            {...props}
            style={{ backgroundColor: "var(--white)", width: "370px" }}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              اضغط لاختيار ملف او قم باسقاط الملف هنا
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default AssignmentDetailes;
