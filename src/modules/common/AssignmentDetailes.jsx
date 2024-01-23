import React from "react";

import { Stack } from "@mui/material";

import MyPaper from "../../components/MyPaper";
import MyProTable from "../../components/MyProTable";
import BackButton from "../../components/BackButton";

const initialData = {
  columns: ["Full_name", "ID", "Collage", "Status", "Date", "Mark"],
  rows: [
    {
      Full_name: "حميد بزنكو",
      ID: "2017367743",
      Collage: "الهندسة المعلوماتية",
      Status: "تم تسليم",
      Date: "12/1/2024",
      Mark: "12",
    },
    {
      Full_name: "سارة علي",
      ID: "2018452369",
      Collage: "الطب",
      Status: "قيد التقديم",
      Date: "5/2/2024",
      Mark: "غير متاح",
    },
    {
      Full_name: "علي محمد",
      ID: "2019123456",
      Collage: "الأعمال الدولية",
      Status: "تم رفضه",
      Date: "18/3/2024",
      Mark: "غير مؤهل",
    },
    {
      Full_name: "أحمد رمضان",
      ID: "2018000111",
      Collage: "الهندسة الكيميائية",
      Status: "قيد التقديم",
      Date: "14/12/2024",
      Mark: "غير محدد",
    },
  ],
};

function AssignmentDetailes() {
  const handleTableButtonClick = (buttonText, rowData) => {
    // Handle button click based on the buttonText and rowData
    console.log(`Button "${buttonText}" clicked for rowwwww:`, rowData);
    // Add your custom logic here
  };
  return (
    <Stack>
      <BackButton />
      <MyProTable
        downloadBtn={true}
        pageTitle={"هندسة البرمجيات"}
        btnTitle={"edit marks"}
        tableData={initialData}
        onHandleTableButtonClick={handleTableButtonClick}
      />
    </Stack>
  );
}

export default AssignmentDetailes;
