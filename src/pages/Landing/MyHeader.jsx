import * as React from "react";

import { motion, useAnimation } from "framer-motion";

import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material";

import aust from "../../assets/svg/aust.svg";

const pages = ["الرئيسية", "الطلاب", "المعلمون", "الدروس", "من نحن؟"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function MyAppBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [box, setBox] = React.useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [currentSection, setCurrentSection] = React.useState(1);
  const controls = useAnimation();

  const scrollToSection = (sectionNumber) => {
    const sectionElement = document.querySelector(`.section-${sectionNumber}`);
    if (sectionElement) {
      const sectionTop = sectionElement.offsetTop;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  const boxMotion = (sectionNumber) => {
    switch (sectionNumber) {
      case 1:
        setBox("0");
        break;
      case 2:
        setBox("-80px");

        break;
      case 3:
        setBox("-160px");

        break;
      case 4:
        setBox("-240px");
        break;
      case 5:
        setBox("-320px");

        break;

      default:
        break;
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      let currentSectionIndex = 1;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          currentSectionIndex = index + 1;
        }
      });

      boxMotion(currentSection);

      setCurrentSection(currentSectionIndex);
    };

    // Animate the background box when the current section changes
    controls.start({
      x: `${(currentSection - 1) * 100}%`,
      transition: { duration: 0.5, type: "spring", stiffness: 120 },
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection, controls]);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",

        color: theme.palette.blue.main,
        boxShadow:
          "0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.20)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img src={aust} alt="" width={"50px"} />
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CLMS
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    scrollToSection(index + 1);
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          {/* <Box
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
            }}
          >
            <img src={aust} alt="" width={"50px"} />
          </Box> */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CLMS
          </Typography> */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              position: "relative",
              alignItems: "center",
              gap: "5px",
              marginRight: "10px",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  scrollToSection(index + 1);
                  boxMotion(index + 1);
                }}
                sx={{
                  my: 2,
                  color: theme.palette.blue.main,
                  display: "block",
                  // border: "1px dotted red",
                  width: "75px",
                  padding: "10px",
                }}
              >
                {page}
              </Button>
            ))}
            <motion.div
              className="background-box"
              animate={{ x: box }}
              transition={{ ease: "linear" }}
            />
          </Box>
          <Stack direction={"row"} gap={"8px"}>
            <Link to={"/student"}>
              <Button
                variant="outlined"
                sx={{
                  color: theme.palette.blue.main,
                  borderColor: theme.palette.blue.main,
                  height: "30px",
                }}
              >
                تسجيل حساب
              </Button>
            </Link>
            <Link to={"/student"}>
              <Button
                variant="contained"
                sx={{
                  color: theme.palette.white.main,
                  borderColor: theme.palette.blue.main,
                  height: "30px",
                }}
              >
                تسجيل دخول
              </Button>
            </Link>
            <Link to={"/admin"}>
              <Button
                variant="contained"
                sx={{
                  color: theme.palette.white.main,
                  borderColor: theme.palette.blue.main,
                  height: "30px",
                }}
              >
                admin
              </Button>
            </Link>
            <Link to={"/instructor"}>
              <Button
                variant="contained"
                sx={{
                  color: theme.palette.white.main,
                  borderColor: theme.palette.blue.main,
                  height: "30px",
                }}
              >
                instructor
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyAppBar;
