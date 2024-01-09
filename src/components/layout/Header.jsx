import React from "react";
import { Box, Typography, Stack } from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Header({ headerData }) {
  const data = {
    name: "محمد بزنكو",
    role: "2016736273",
    notifications: ["one noti", "second one", "3rd woeoew", "the last one"],
  };
  const headerD = headerData ? headerData : data;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        minWidth: "300px",
        width: "100%",
        height: "86px",
        // border: "1px solid red",
        padding: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          backgroundColor: "#fff",
          borderRadius: "13px",
          padding: "0 10px",
        }}
      >
        {/* <NotificationsNoneIcon fontSize="large" /> */}

        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <NotificationsNoneIcon fontSize="large" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Stack direction={"column"}>
              {headerD.notifications.map((item, index) => (
                <MenuItem key={index} onClick={handleClose}>
                  {item}
                </MenuItem>
              ))}
              {/* <MenuItem onClick={handleClose}>لديك وظيفة جديدة</MenuItem>
              <MenuItem onClick={handleClose}>تم تحميل محاضرة جديدة</MenuItem>
              <MenuItem onClick={handleClose}>تم انشاء الحساب</MenuItem> */}
            </Stack>
          </Menu>
        </div>

        <Stack direction={"row-reverse"} sx={{ alignItems: "center" }}>
          <AccountCircleIcon fontSize="large" sx={{ marginRight: "10px" }} />
          <Stack direction={"column"}>
            <Typography>{headerD.name}</Typography>
            <Typography>{headerD.role}</Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Header;
