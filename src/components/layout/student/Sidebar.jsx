import React from "react";

import { Stack, Typography } from "@mui/material";

import { SidebarBox, LinksBox, LinkItem } from "./Styles";

import whiteAust from "../../../assets/svg/whiteAust.svg";
import { Link } from "react-router-dom";

const sidebarVariants = {
  sidebarOpen: {
    width: "350px",
    transition: {
      when: "beforeChildren",
    },
  },

  sidebarClosed: {
    width: "",
  },
};

const LinkBoxVariants = {
  sidebarOpen: {
    x: 30,
    opacity: 1,
  },
  sidebarClosed: {
    x: -100,
    opacity: 0,
  },
};

const Sidebar = ({ open, items }) => {
  return (
    <SidebarBox
      variants={sidebarVariants}
      animate={open ? "sidebarOpen" : "sidebarClosed"}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"space-between"}
        height={"100%"}
      >
        <Stack
          sx={{ height: "108px", width: "100%" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img src={whiteAust} alt="Logo" width={"50px"} />
        </Stack>
        <Stack
          sx={{
            height: "100%",
            width: "100%",
          }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <LinksBox
            variants={LinkBoxVariants}
            style={{ alignItems: "flex-start" }}
          >
            {items.map((item, index) => (
              <Link
                key={index}
                to={`${item.path}`}
                style={{ color: "var(--white)" }}
              >
                <LinkItem>{item.title}</LinkItem>
              </Link>
            ))}
          </LinksBox>
        </Stack>
        <Stack
          sx={{ height: "100px", width: "100%" }}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          direction={"row"}
        >
          <Link to={"reg/login"} style={{ color: "var(--white)" }}>
            <Typography>تسجيل خروج</Typography>
          </Link>
        </Stack>
      </Stack>
    </SidebarBox>
  );
};

export default Sidebar;
