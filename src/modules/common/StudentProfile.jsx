import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import {
  Stack,
  Typography,
  Button,
  Box,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

import img from "../../assets/profile.jpg";
import MyPaper from "../../components/MyPaper";
import MyTable from "../../components/MyTable";
import BackButton from "../../components/BackButton";

const initialData = {
  columns: [
    "Course_name",
    "Course_ID",
    "Hours",
    "Status",
    "amali",
    "nazari",
    "percent",
    "points",
  ],
  rows: [
    {
      Course_name: "خوارزميات",
      Course_ID: "wx304",
      Hours: "3",
      Status: "ناجح",
      amali: "19",
      nazari: "43",
      percent: "73%",
      points: "2.2",
    },
    {
      Course_name: "خوارزميات",
      Course_ID: "wx304",
      Hours: "3",
      Status: "ناجح",
      amali: "19",
      nazari: "43",
      percent: "73%",
      points: "2.2",
    },
    {
      Course_name: "شبكات الحاسوب",
      Course_ID: "cn201",
      Hours: "4",
      Status: "راسب",
      amali: "12",
      nazari: "35",
      percent: "45%",
      points: "1.5",
    },
    {
      Course_name: "برمجة الويب",
      Course_ID: "web101",
      Hours: "3",
      Status: "ناجح",
      amali: "22",
      nazari: "48",
      percent: "80%",
      points: "3.0",
    },
    {
      Course_name: "قواعد البيانات",
      Course_ID: "db200",
      Hours: "3",
      Status: "ناجح",
      amali: "18",
      nazari: "40",
      percent: "75%",
      points: "2.5",
    },
    {
      Course_name: "تحليل الأداء",
      Course_ID: "pa301",
      Hours: "3",
      Status: "راسب",
      amali: "14",
      nazari: "32",
      percent: "50%",
      points: "1.8",
    },
    {
      Course_name: "أمان المعلومات",
      Course_ID: "is401",
      Hours: "4",
      Status: "ناجح",
      amali: "24",
      nazari: "50",
      percent: "85%",
      points: "3.5",
    },
    {
      Course_name: "تصميم الخوارزميات",
      Course_ID: "da501",
      Hours: "3",
      Status: "ناجح",
      amali: "20",
      nazari: "45",
      percent: "78%",
      points: "2.8",
    },
    {
      Course_name: "تطوير تطبيقات الجوال",
      Course_ID: "ma701",
      Hours: "4",
      Status: "راسب",
      amali: "16",
      nazari: "38",
      percent: "55%",
      points: "2.0",
    },
    {
      Course_name: "علم البيانات",
      Course_ID: "ds601",
      Hours: "3",
      Status: "ناجح",
      amali: "23",
      nazari: "49",
      percent: "82%",
      points: "3.2",
    },
    {
      Course_name: "تطوير البرمجيات",
      Course_ID: "sd801",
      Hours: "4",
      Status: "ناجح",
      amali: "21",
      nazari: "46",
      percent: "79%",
      points: "3.0",
    },
  ],
};

const KeyNValue = ({ title, value }) => {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
      <Typography>{title}:</Typography>
      <Typography>{value}</Typography>
    </Stack>
  );
};

const VerDivider = () => {
  return (
    <Box
      sx={{
        width: "1px",
        height: "100%",
        backgroundColor: "#DDD",
      }}
    />
  );
};

function StudentProfile() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const [TabsValue, setTabsValue] = useState("1");

  const handleTabsChange = (event, newValue) => {
    setTabsValue(newValue);
  };

  function handleButtonClick(buttonText, rowData) {
    // Handle the button click event here
    console.log(`Button "${buttonText}" clicked for row:`, rowData);
  }

  return (
    <Stack>
      <BackButton />
      <MyPaper>
        {/* header */}
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography>معلومات طالب</Typography>
          <Stack direction={"row"} gap={"10px"}>
            <Link to={"/instructor/editstudent"}>
              <Button
                startIcon={<EditIcon />}
                variant="outlined"
                sx={{ gap: "10px", paddingRight: "0" }}
              >
                تعديل بيانات الطالب
              </Button>
            </Link>
            <Button
              startIcon={<CloseIcon />}
              variant="contained"
              sx={{ gap: "10px", paddingRight: "0" }}
              onClick={goBack}
            >
              اغلاق التفاصيل
            </Button>
          </Stack>
        </Stack>
        {/* body */}
        <Stack
          direction={"row"}
          gap={"20px"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          sx={{
            height: "200px",
            padding: "10px",
            margin: "20px 0",
          }}
        >
          <img
            src={img}
            alt=""
            width={"180px"}
            style={{ borderRadius: "10px" }}
          />
          <VerDivider />
          <Stack sx={{ height: "100%" }} justifyContent={"space-evenly"}>
            <KeyNValue title={"الاسم"} value={"محمد نور الدقاق"} />
            <KeyNValue title={"الرقم الجامعي"} value={"2018016106"} />
            <KeyNValue title={"الكلية"} value={"الهندسة المعلوماتية"} />
            <KeyNValue title={"السنة"} value={"الاولى"} />
          </Stack>
          <VerDivider />
          <Stack sx={{ height: "100%" }} justifyContent={"space-evenly"}>
            <KeyNValue title={"الحالة"} value={"مسجل"} />
            <KeyNValue title={"عدد الساعات"} value={"169 / 19"} />
            <KeyNValue title={"المئوي"} value={"76%"} />
            <KeyNValue title={"النقطي"} value={"2.2"} />
          </Stack>
        </Stack>
        <Stack>
          <Box sx={{ width: "100%", minHeight: "500px", typography: "body1" }}>
            <TabContext value={TabsValue}>
              <Stack justifyContent={"space-between"}>
                <Stack>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      centered
                      onChange={handleTabsChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="علامات الطالب" value="1" />
                      <Tab label="وظائف الطالب" value="2" />
                      <Tab label="صفوف الطالب" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <MyTable
                      editBtn={false}
                      detailesBtn={false}
                      data={initialData.rows}
                      columns={initialData.columns}
                      onButtonClick={handleButtonClick}
                    />
                  </TabPanel>
                  <TabPanel value="2">
                    <MyTable
                      editBtn={false}
                      detailesBtn={false}
                      data={initialData.rows}
                      columns={initialData.columns}
                      onButtonClick={handleButtonClick}
                    />
                  </TabPanel>
                  <TabPanel value="3">
                    <MyTable
                      editBtn={false}
                      detailesBtn={false}
                      data={initialData.rows}
                      columns={initialData.columns}
                      onButtonClick={handleButtonClick}
                    />
                  </TabPanel>
                </Stack>
                <Stack>
                  <Typography>student statues</Typography>
                </Stack>
              </Stack>
            </TabContext>
          </Box>
        </Stack>
      </MyPaper>
    </Stack>
  );
}

export default StudentProfile;
