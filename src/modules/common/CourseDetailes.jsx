import React from "react";

import {
  Stack,
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import InfoIcon from "@mui/icons-material/Info";

import MyPaper from "../../components/MyPaper";
import BackButton from "../../components/BackButton";

import img from "../../assets/course.png";

const PdfItem = ({ pdfTitle }) => {
  return (
    <Stack
      direction={"row"}
      sx={{ width: "100%", height: "50px" }}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <Stack direction={"row"} gap={"10px"}>
        <PictureAsPdfIcon htmlColor="#D10000" />
        <Typography>{pdfTitle}</Typography>
      </Stack>
    </Stack>
  );
};

function CourseDetailes() {
  const data = [
    {
      pdfItemsFirst: [
        {
          title: "ملخص المحاضرة الأولى للنظري",
          url: "/pdfs/theory_lecture_1_summary.pdf",
        },
      ],
      pdfItemsSec: [{ title: "تمرين عملي 1", url: "/pdfs/practical_1.pdf" }],
    },
    {
      pdfItemsFirst: [
        {
          title: "المراجعة للمحاضرة الثانية للنظري",
          url: "/pdfs/theory_lecture_2_review.pdf",
        },
      ],
      pdfItemsSec: [{ title: "تمرين عملي 2", url: "/pdfs/practical_2.pdf" }],
    },
    {
      pdfItemsFirst: [
        {
          title: "ملخص المحاضرة الثالثة للنظري",
          url: "/pdfs/theory_lecture_1_summary.pdf",
        },
      ],
      pdfItemsSec: [{ title: "تمرين عملي 3", url: "/pdfs/practical_1.pdf" }],
    },
  ];
  const LecItem = ({ pdfItemsFirst, pdfItemsSec, index }) => {
    return (
      <div style={{ padding: "0 10px 0 0 ", marginBottom: "50px" }}>
        <Typography textAlign={"start"}>المحاضرة {index + 1}</Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>محاضرات النظري</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {pdfItemsFirst.map((item, index) => (
              <PdfItem key={index} pdfTitle={item.title} />
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>محاضرات العملي</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionDetails>
              {pdfItemsSec.map((item, index) => (
                <PdfItem key={index} pdfTitle={item.title} />
              ))}
            </AccordionDetails>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  };
  return (
    <Stack>
      <BackButton />
      <Stack gap={"20px"}>
        <Stack
          sx={{
            marginTop: "15px",
            backgroundColor: "#fff",
            borderRadius: "4px",
            padding: "10px",
          }}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"}>
            <img
              src={img}
              alt=""
              width={"200px"}
              style={{ borderRadius: "4px" }}
            />
            <Stack
              alignItems={"flex-start"}
              gap={"10px"}
              sx={{ padding: "15px" }}
            >
              <Stack direction={"row"} alignItems={"center"} gap={"7px"}>
                <Typography fontWeight={"bold"} fontSize={"20px"}>
                  رياضيات متقطعة
                </Typography>
                <Typography fontSize={"15px"}>#exp123</Typography>
              </Stack>
              <Typography fontSize={"18px"}>جون دو</Typography>
              <Typography fontSize={"18px"}>12:45 ظهرا</Typography>
              <Typography fontSize={"18px"}>الاثنين - الثلاثاء</Typography>
            </Stack>
          </Stack>
          <Stack justifyContent={"space-between"} alignItems={"flex-end"}>
            <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
              <Box
                sx={{
                  backgroundColor: "#42FF00",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                }}
              />
              <Typography>207 طالب مسجل</Typography>
            </Stack>
            <Stack direction={"row"}>
              <Button
                variant="text"
                sx={{ gap: "10px" }}
                startIcon={<EditIcon />}
              >
                تعديل
              </Button>
              <Button variant="outlined">الطلاب</Button>
            </Stack>
          </Stack>
        </Stack>
        <MyPaper>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ marginBottom: "25px" }}
          >
            <Typography fontWeight={"bold"}>المحاضرات</Typography>
            <Button
              variant="contained"
              sx={{ gap: "10px" }}
              startIcon={<AddIcon />}
            >
              اضافة
            </Button>
          </Stack>
          {data.map((item, index) => (
            <LecItem
              key={index}
              index={index}
              pdfItemsFirst={item.pdfItemsFirst}
              pdfItemsSec={item.pdfItemsSec}
            />
          ))}
          {/* <LecItem
            pdfItemsFirst={testData.pdfItemsFirst}
            pdfItemsSec={testData.pdfItemsSec}
          /> */}
        </MyPaper>
        <MyPaper>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ marginBottom: "25px 0" }}
          >
            <Typography fontWeight={"bold"}>الوظائف</Typography>
            <Button
              variant="contained"
              sx={{ gap: "10px" }}
              startIcon={<AddIcon />}
            >
              اضافة
            </Button>
          </Stack>
          <Stack sx={{ padding: "0 10px" }}>
            {[1, 2, 3, 4].map((item, index) => (
              <Stack
                key={index}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                sx={{
                  borderBottom: "1px solid #D9D9D9",
                  padding: "10px 0",
                  marginTop: "20px",
                }}
              >
                <Typography>الوظيفة {item}</Typography>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={"10px"}
                >
                  <Typography>عدد الطلاب المقدمين {index + 3} من 52</Typography>
                  <Button
                    variant="text"
                    sx={{ gap: "10px" }}
                    startIcon={<InfoIcon htmlColor="var(--blue)" />}
                  >
                    التفاصيل
                  </Button>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </MyPaper>
      </Stack>
    </Stack>
  );
}

export default CourseDetailes;
