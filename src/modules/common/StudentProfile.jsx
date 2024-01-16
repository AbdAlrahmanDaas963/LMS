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
import Alert from "@mui/material/Alert";

import useResponsiveLayout from "../../utils/useResponsiveLayout";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import img from "../../assets/profile.jpg";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function StudentProfile() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const isSmallScreen = useResponsiveLayout();

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
      <Typography
        textAlign={"start"}
        fontWeight={"bold"}
        sx={{ margin: "10px 0" }}
      >
        المعلومات الشخصية
      </Typography>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        alignItems={"center"}
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
        direction={isSmallScreen ? "column" : "row"}
        width={"100%"}
        justifyContent={"space-between"}
        gap={"10px"}
        sx={{
          borderRadius: "4px",
          background: "#fff",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          padding: isSmallScreen ? "10px" : "32px",
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
          <Typography fontSize={isSmallScreen ? "20px" : "25px"}>
            المجموع التراكمي:
          </Typography>
          <Typography
            fontWeight={"bold"}
            fontSize={isSmallScreen ? "20px" : "25px"}
          >
            87%
          </Typography>
          <Typography
            fontWeight={"bold"}
            fontSize={isSmallScreen ? "20px" : "25px"}
          >
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
          <Typography fontSize={isSmallScreen ? "20px" : "25px"}>
            المجموع الفصلي:
          </Typography>
          <Typography
            fontWeight={"bold"}
            fontSize={isSmallScreen ? "20px" : "25px"}
          >
            53%
          </Typography>
          <Typography
            fontWeight={"bold"}
            fontSize={isSmallScreen ? "20px" : "25px"}
          >
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
          padding: isSmallScreen ? "10px" : "32px",
          marginBottom: "20px",
        }}
      >
        <Alert variant="filled" severity="warning">
          <Stack alignItems={"flex-start"} sx={{ margin: "0 10px" }}>
            <Typography fontSize={"20px"} fontWeight={"bold"}>
              استدراكي
            </Typography>
            <Typography>المعدل 1.99</Typography>
          </Stack>
        </Alert>

        <Alert variant="filled" severity="error">
          <Stack alignItems={"flex-start"} sx={{ margin: "0 10px" }}>
            <Typography fontSize={"20px"} fontWeight={"bold"}>
              غياب
            </Typography>
            <Typography>رياضيات 1</Typography>
          </Stack>
        </Alert>
      </Stack>
      {/* <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
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
      </Stack> */}
      {/* ------------------------------------------------- */}
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
