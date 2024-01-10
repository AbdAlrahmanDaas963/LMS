import React from "react";

import { Stack, Typography, Box, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import img from "../../assets/profile.jpg";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function StudentProfile() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  return (
    <Stack>
      <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
        <Stack>
          <Box marginTop={"15px"}>
            <Typography>name</Typography>
            <Typography>joe done</Typography>
          </Box>
          <Box marginTop={"15px"}>
            <Typography>collage</Typography>
            <Typography>math</Typography>
          </Box>
          <Box marginTop={"15px"}>
            <Typography>grade</Typography>
            <Typography>80%</Typography>
          </Box>
        </Stack>
        <Stack>
          <Box marginTop={"15px"}>
            <Typography>st_id</Typography>
            <Typography>423423423432</Typography>
          </Box>
          <Stack direction={"row"} gap={"15px"} marginTop={"15px"}>
            <Box>
              <Typography>collage</Typography>
              <Typography>math</Typography>
            </Box>
            <Box>
              <Typography>status</Typography>
              <Typography>true</Typography>
            </Box>
          </Stack>
          <Box marginTop={"15px"}>
            <Typography>hours</Typography>
            <Typography>169/53</Typography>
          </Box>
        </Stack>
        <img src={img} alt="" width={"200px"} />
      </Stack>
      <Stack alignItems={"flex-start"}>
        <Typography>enrolled courses</Typography>
        <Stack direction={"row"} flexWrap={"wrap"}>
          <Box
            sx={{
              width: "150px",
              height: "150px",
              border: "1px solid black",
              margin: " 15px",
            }}
          >
            1
          </Box>
          <Box
            sx={{
              width: "150px",
              height: "150px",
              border: "1px solid black",
              margin: " 15px",
            }}
          >
            2
          </Box>
          <Box
            sx={{
              width: "150px",
              height: "150px",
              border: "1px solid black",
              margin: " 15px",
            }}
          >
            3
          </Box>
          <Box
            sx={{
              width: "150px",
              height: "150px",
              border: "1px solid black",
              margin: " 15px",
            }}
          >
            4
          </Box>
          <Box
            sx={{
              width: "150px",
              height: "150px",
              border: "1px solid black",
              margin: " 15px",
            }}
          >
            5
          </Box>
        </Stack>
      </Stack>
      <Stack direction={"row"} justifyContent={"center"} gap={"10px"}>
        <React.Fragment>
          <Button variant="outlined" color="success" onClick={handleClickOpen3}>
            add
          </Button>
          <Dialog
            fullScreen
            open={open3}
            onClose={handleClose3}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: "relative" }} color="success">
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose3}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6"
                  component="div"
                >
                  Add
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose3}>
                  حفظ التعديلات
                </Button>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem button>
                <ListItemText
                  primary="Add Button"
                  secondary="Newwwwwwwwwwwwww"
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary="Default notification ringtone"
                  secondary="Tethys"
                />
              </ListItem>
            </List>
          </Dialog>
        </React.Fragment>
        {/* ------------------ */}
        <React.Fragment>
          <Button variant="outlined" color="info" onClick={handleClickOpen2}>
            edit
          </Button>
          <Dialog
            fullScreen
            open={open2}
            onClose={handleClose2}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: "relative" }} color="info">
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose2}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6"
                  component="div"
                >
                  Edit
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose2}>
                  حفظ التعديلات
                </Button>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem button>
                <ListItemText primary="Edit Button" secondary="wowwww" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary="Default notification ringtone"
                  secondary="Tethys"
                />
              </ListItem>
            </List>
          </Dialog>
        </React.Fragment>
        {/* ------------------ */}
        <React.Fragment>
          <Button variant="outlined" color="error" onClick={handleClickOpen1}>
            delete
          </Button>
          <Dialog
            fullScreen
            open={open1}
            onClose={handleClose1}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: "relative" }} color="error">
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose1}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6"
                  component="div"
                >
                  Delete
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose1}>
                  حفظ التعديلات
                </Button>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem button>
                <ListItemText primary="Delete Button" secondary="Titania" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary="Default notification ringtone"
                  secondary="Tethys"
                />
              </ListItem>
            </List>
          </Dialog>
        </React.Fragment>
      </Stack>
    </Stack>
  );
}

export default StudentProfile;
