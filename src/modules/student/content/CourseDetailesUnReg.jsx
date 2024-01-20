import React from "react";

import {
  Stack,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import BackButton from "../../../components/BackButton";

function CourseDetailesUnReg() {
  return (
    <Stack direction={"column"}>
      <BackButton />
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
          <Box
            sx={{ width: "200px", height: "200px", backgroundColor: "#00f" }}
          ></Box>
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
          <Button variant="outlined">الغاء التسجيل</Button>
        </Stack>
      </Stack>
      <Stack
        sx={{
          borderRadius: "4px",
          backgroundColor: "#fff",
          padding: "16px",
          marginTop: "24px",
        }}
        alignItems={"flex-start"}
      >
        <Typography>نبذة عن المادة</Typography>
        <Typography textAlign={"start"} sx={{ marginTop: "16px" }}>
          مادة الرياضيات المتقطعة هي فرع من فروع الرياضيات التي تركز على دراسة
          الوظائف والتسلسلات المتقطعة، وهي تعتبر أحد الأساسيات في علوم الحاسوب
          وعلوم الرياضيات التطبيقية. تهدف هذه المادة إلى فهم وتحليل النماذج
          الرياضية المتقطعة التي تتكون من عناصر منفصلة بدلاً من قيم مستمرة. تشمل
          مادة الرياضيات المتقطعة مفاهيم مثل التسلسلات المتقطعة، والدوال
          المتقطعة، والمجموعات المتقطعة، والتحويلات المتقطعة. يتم تطبيق هذه
          المفاهيم في مجموعة متنوعة من المجالات مثل العلوم الحاسوبية، وعلوم
          البيانات، والتحليل العددي، والهندسة، والاقتصاد. مادة الرياضيات
          المتقطعة تساعد في فهم الظواهر غير المتصلة والنماذج المتقطعة التي توجد
          في العالم الحقيقي. يتم استخدام الرياضيات المتقطعة لحل المشكلات العملية
          والتحليل الكمي للبيانات المتقطعة، مما يسهم في اتخاذ القرارات الصحيحة
          وفهم الظواهر المعقدة. تشمل المواضيع الرئيسية في مادة الرياضيات
          المتقطعة المجموعات والعمليات المتقطعة، والدوال المتقطعة والتحويلات،
          وتقنيات التحليل المتقطعة، والتقريب المتقطع، والتقدير والتنبؤ. يتم
          استخدام أدوات وتقنيات مثل الدوال المعرفة على قطع والتحويلات المتقطعة
          لتمثيل وحل المسائل العملية. باختصار، مادة الرياضيات المتقطعة تعتبر
          أساسية في فهم النماذج المتقطعة والتحليل الكمي للبيانات. توجد تطبيقات
          واسعة لهذه المادة في مجالات مختلفة، وتلعب دورًا هامًا في فهم الظواهر
          غير المتصلة واتخاذ القرارات الصحيحة في العديد من المجالات العلمية
          والتكنولوجية.
        </Typography>
      </Stack>
    </Stack>
  );
}

export default CourseDetailesUnReg;
