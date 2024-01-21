// cols => course name, course id, collage, students count, lectures count

import React from "react";

import MyProTable from "../../../components/MyProTable";

const initialData = {
  columns: [
    "Course_name",
    "Course_ID",
    "Collage",
    "Students_Count",
    "Lectures_Count",
  ],
  rows: [
    {
      Course_name: "معالجة الصور",
      Course_ID: "XE330",
      Collage: "الهندسة المعلوماتية",
      Students_Count: "34",
      Lectures_Count: "8",
    },
    {
      Course_name: "برمجة الويب",
      Course_ID: "WE101",
      Collage: "علوم الحاسوب",
      Students_Count: "45",
      Lectures_Count: "10",
    },
    {
      Course_name: "قواعد البيانات",
      Course_ID: "DB200",
      Collage: "نظم المعلومات",
      Students_Count: "28",
      Lectures_Count: "6",
    },
    {
      Course_name: "تصميم واجهات المستخدم",
      Course_ID: "UI450",
      Collage: "علوم الحاسوب",
      Students_Count: "20",
      Lectures_Count: "5",
    },
    {
      Course_name: "شبكات الحاسوب",
      Course_ID: "CN300",
      Collage: "الهندسة المعلوماتية",
      Students_Count: "30",
      Lectures_Count: "7",
    },
    {
      Course_name: "تطوير تطبيقات الجوال",
      Course_ID: "MA700",
      Collage: "علوم الحاسوب",
      Students_Count: "25",
      Lectures_Count: "6",
    },
    {
      Course_name: "أمان الشبكات",
      Course_ID: "NS550",
      Collage: "الهندسة المعلوماتية",
      Students_Count: "40",
      Lectures_Count: "9",
    },
    {
      Course_name: "علم البيانات",
      Course_ID: "DS800",
      Collage: "نظم المعلومات",
      Students_Count: "35",
      Lectures_Count: "8",
    },
    {
      Course_name: "تقنيات الذكاء الاصطناعي",
      Course_ID: "AI600",
      Collage: "الهندسة المعلوماتية",
      Students_Count: "22",
      Lectures_Count: "5",
    },
    {
      Course_name: "تحليل البيانات",
      Course_ID: "DA450",
      Collage: "نظم المعلومات",
      Students_Count: "27",
      Lectures_Count: "7",
    },
    {
      Course_name: "تطوير البرمجيات",
      Course_ID: "SD700",
      Collage: "علوم الحاسوب",
      Students_Count: "38",
      Lectures_Count: "10",
    },
    {
      Course_name: "أساسيات الذكاء الاصطناعي",
      Course_ID: "AI200",
      Collage: "الهندسة المعلوماتية",
      Students_Count: "32",
      Lectures_Count: "6",
    },
    {
      Course_name: "تصميم قواعد البيانات",
      Course_ID: "DB450",
      Collage: "نظم المعلومات",
      Students_Count: "23",
      Lectures_Count: "5",
    },
    {
      Course_name: "تطبيقات الويب المتقدمة",
      Course_ID: "AW500",
      Collage: "علوم الحاسوب",
      Students_Count: "28",
      Lectures_Count: "7",
    },
    {
      Course_name: "أمان المعلومات",
      Course_ID: "IS300",
      Collage: "الهندسة المعلوماتية",
      Students_Count: "31",
      Lectures_Count: "8",
    },
    {
      Course_name: "تصميم وتطوير المواقع الإلكترونية",
      Course_ID: "WD600",
      Collage: "علوم الحاسوب",
      Students_Count: "26",
      Lectures_Count: "6",
    },
    {
      Course_name: "إدارة مشاريع تكنولوجيا المعلومات",
      Course_ID: "ITPM700",
      Collage: "نظم المعلومات",
      Students_Count: "33",
      Lectures_Count: "7",
    },
    {
      Course_name: "تقنيات تطوير البرمجيات",
      Course_ID: "SDT550",
      Collage: "علوم الحاسوب",
      Students_Count: "29",
      Lectures_Count: "9",
    },
  ],
};

function Courses() {
  const handleTableButtonClick = (buttonText, rowData) => {
    // Handle button click based on the buttonText and rowData
    console.log(`Button "${buttonText}" clicked for row:`, rowData);
    // Add your custom logic here
  };
  return (
    <MyProTable
      pageTitle={"المواد"}
      tableData={initialData}
      onHandleTableButtonClick={handleTableButtonClick}
      btnTitle={"اضافة مادة"}
      detailesBtn={true}
      editBtn={true}
    />
  );
}

export default Courses;
