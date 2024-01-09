import React from "react";
import { useLocation } from "react-router-dom";

import { Stack, Button, Typography, Box, Divider } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

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

  if (!state || !state.assignment) {
    return <div>No Assignment details available.</div>;
  }

  const { title, deadline, id, detailes } = state.assignment;
  console.log("state :>> ", state);
  console.log("detailes :>> ", detailes);

  return (
    <Stack
      sx={{
        backgroundColor: "#fff",
        borderRadius: "15px",
        padding: "50px",
        width: "100%",
        minHeight: "50vh",
      }}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography fontWeight={"bold"}>هندسة البرمجيات</Typography>
      <Stack
        direction={"column"}
        justifyContent={"space-between"}
        sx={{ width: "100%", marginTop: "50px" }}
      >
        <Typography>deadline: {detailes.deadline}</Typography>
        <Typography>pushed: {detailes.pushed}</Typography>
      </Stack>
      <Button
        variant="outlined"
        sx={{ gap: "20px", marginTop: "50px", width: "350px" }}
      >
        <PictureAsPdfIcon fontSize="large" />
        <Typography>تنزيل {detailes.pdf}</Typography>
      </Button>

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
  );
}

export default AssignmentDetailes;
