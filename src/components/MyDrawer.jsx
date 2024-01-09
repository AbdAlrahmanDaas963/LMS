import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Stack } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import { Button, Drawer, Menu } from "antd";

import whiteAust from "../assets/svg/aust.svg";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to={"courses"}>الكورسات</Link>, "1"),
  getItem(<Link to={"profile"}>البروفايل</Link>, "2"),
  getItem(<Link to={"grades"}>الدرجات</Link>, "3"),
  getItem(<Link to={"classes"}>الصفوف</Link>, "4"),
  getItem(<Link to={"assignment"}>الوظائف</Link>, "5"),
];

const MyDrawer = ({ listItems }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        style={{
          width: "50px",
          padding: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "17px -15px",
          borderRadius: "50%",
          height: "50px",
        }}
        type="primary"
        onClick={showDrawer}
      >
        <KeyboardDoubleArrowLeftIcon onClick={showDrawer} />
      </Button>
      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        style={{
          color: "var(--black)",
          backgroundColor: "var(--white)",
        }}
        extra={<img src={whiteAust} alt="Logo" width={"50px"} />}
      >
        <Stack justifyContent={"space-between"} height={"100%"}>
          <Menu
            style={{
              width: "100%",
              backgroundColor: "var(--white)",
              borderInlineEnd: "0",
            }}
            defaultSelectedKeys={["1"]}
            mode={"inline"}
            theme={"light"}
            items={listItems ? listItems : items}
            onClick={onClose}
          />
          <Link to={"/reg/login"}>تسجيل خروج</Link>
        </Stack>
      </Drawer>
    </>
  );
};
export default MyDrawer;
