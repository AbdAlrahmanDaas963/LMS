import React, { useState } from "react";

import { Stack, TextField, Button, Chip } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import SearchIcon from "@mui/icons-material/Search";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LanguageIcon from "@mui/icons-material/Language";
import FolderZipOutlinedIcon from "@mui/icons-material/FolderZipOutlined";

import resourses from "../../../data/resourses.json";
import { Link } from "react-router-dom";

function Resourses() {
  const [filterdResourses, setFilteredResourses] = useState(resourses.courses);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    const filteredCourses = resourses.courses.filter((course) =>
      course.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log("Filtered Courses:", filteredCourses);
    setFilteredResourses(filteredCourses);
  };

  const handelShowAll = () => {
    setFilteredResourses(resourses.courses);
  };

  const handelShowMyCourses = () => {
    const myCourses = resourses.courses.filter((course) => course.isEnrolled);
    setFilteredResourses(myCourses);
  };

  const ItemPdf = ({ title, action }) => {
    return (
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <PictureAsPdfIcon htmlColor="var(--blue)" />
          <Typography sx={{ margin: "0 10px 0 0 " }}>{title}</Typography>
        </Stack>

        <Link>
          <Button>تحميل</Button>
        </Link>
      </Stack>
    );
  };
  const ItemWebsite = ({ title, action }) => {
    return (
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <LanguageIcon htmlColor="var(--blue)" />
          <Typography sx={{ margin: "0 10px 0 0 " }}>{title}</Typography>
        </Stack>

        <Link>
          <Button>انتقل</Button>
        </Link>
      </Stack>
    );
  };
  const ItemRar = ({ title, action }) => {
    return (
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <FolderZipOutlinedIcon htmlColor="var(--blue)" />
          <Typography sx={{ margin: "0 10px 0 0 " }}>{title}</Typography>
        </Stack>

        <Link>
          <Button>تحميل</Button>
        </Link>
      </Stack>
    );
  };
  return (
    <div>
      <Stack
        direction={"row"}
        sx={{
          borderRadius: "4px",
          background: " #FFF",
          boxShadow: "0px 4px 12.6px 1px rgba(0, 0, 0, 0.10)",
          padding: "10px",
        }}
      >
        <Button onClick={handleSearch}>
          <SearchIcon htmlColor="var(--whitesecondary)" />
        </Button>
        <TextField
          id="standard-basic"
          label="ابحث عن مصدر - مادة"
          variant="standard"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Stack>
      <Stack direction={"row"} gap={"10px"} sx={{ margin: "20px 0" }}>
        <Chip label="All courses" onClick={handelShowAll} />
        <Chip label="My courses" onClick={handelShowMyCourses} />
        <Chip label="Filter" onClick={handelShowAll} />
        <Chip label="Filter" onClick={handelShowAll} />
        <Chip label="Filter" onClick={handelShowAll} />
      </Stack>
      <div>
        {filterdResourses.length === 0 ? (
          <Typography>Nothig to show </Typography>
        ) : (
          filterdResourses.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <Typography>{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* {item.res.map((item, index) => (
                  <Stack key={index}>{item.type}</Stack>
                ))} */}
                {/* {item.res.map((item, index) => {
                  if (item.type === "pdf")
                    return <ItemPdf key={index} title={item.type} />;
                  if (item.type === "website")
                    return <ItemWebsite key={index} title={item.type} />;
                  if (item.type === "rar")
                    return <ItemRar key={index} title={item.type} />;

                  return (
                    <Typography key={index}>لم يتم اضافة مصادر بعد </Typography>
                  );
                })} */}
                {item.res.length === 0
                  ? "لم يتم اضافة مصادر بعد ..."
                  : item.res.map((item, index) => {
                      if (item.type === "pdf")
                        return <ItemPdf key={index} title={item.type} />;
                      if (item.type === "website")
                        return <ItemWebsite key={index} title={item.type} />;
                      if (item.type === "rar")
                        return <ItemRar key={index} title={item.type} />;
                      return (
                        <Typography key={index}>
                          لم يتم اضافة مصادر بعد
                        </Typography>
                      );
                    })}
              </AccordionDetails>
            </Accordion>
          ))
        )}
        {/* {filterdResourses.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Typography>{item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item.res.map((item, index) => (
                <Stack key={index}>{item.type}</Stack>
              ))}
            </AccordionDetails>
          </Accordion>
        ))} */}

        {/* <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </div>
    </div>
  );
}

export default Resourses;
