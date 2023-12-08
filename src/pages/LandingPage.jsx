import React, { useState, useEffect } from "react";
import { Stack, Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

import Drawer from "../components/Drawer";
import CourseCard from "../components/CourseCard";

import warning from "../assets/svg/warning.svg";
import leftArrow from "../assets/svg/leftArrow.svg";

function LandingPage() {
  const cards = [
    {
      id: 0,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    {
      id: 1,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    {
      id: 2,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    {
      id: 3,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    {
      id: 4,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    {
      id: 5,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    {
      id: 6,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    {
      id: 7,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    {
      id: 8,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    {
      id: 9,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    {
      id: 10,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
    {
      id: 11,
      title: "عنوان البطاقة",
      desc: "شرح البطاقة",
      more: "Greyhound divisively hello coldly wonderfully marginally far upon excluding.",
    },
  ];
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(window.innerWidth > 750);

  const handleResize = () => {
    setIsDrawerOpen(window.innerWidth > 750);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <Stack direction={"row"} sx={{ width: "100vw" }}>
      <div
        style={{
          width: isDrawerOpen ? "300px" : "0",
          height: "100vh",
          transition: "width 0.3s ease-in-out",
          zIndex: 2,
        }}
      >
        <button onClick={openDrawer}>Open Drawer</button>
        <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
        {/* The rest of your application */}
      </div>
      <Stack sx={{ width: "100%" }} direction={"column"} alignItems={"center"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "80%",
            height: "100px",
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "50px 0",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <img src={warning} alt="" width={"100px"} height={"100px"} />
            <Typography sx={{ margin: "0 10px" }}>
              يرجى اكمال اعداد الحساب
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100px",
              height: "100px",
              backgroundColor: theme.palette.blue.main,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={leftArrow} alt="" width={"100%"} />
          </Box>
        </Box>
        <Box sx={{ width: "80%" }}>
          <Grid container spacing={3}>
            {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={12} md={6} lg={6}>
                <CourseCard
                  id={card.id}
                  desc={card.desc}
                  more={card.more}
                  title={card.title}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Stack>
  );
}

{
  /* <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid> */
}

export default LandingPage;

// {cards.map((item) => (
//   <CourseCard
//     key={item.id}
//     id={item.id}
//     title={item.id}
//     desc={item.desc}
//     more={item.more}
//   />
// ))}
