import React from "react";

import MyProTable from "../../components/MyProTable";

const initialData = {
  columns: ["Course_name", "Assinment", "Received", "DeadLine"],
  rows: [
    {
      Course_name: "معالجة الصور",
      Assinment: "وظيفة في ماتلاب",
      Received: "3",
      DeadLine: "26/1/2024",
    },
    ,
    {
      Course_name: "برمجة الويب",
      Assinment: "تصميم موقع إلكتروني",
      Received: "5",
      DeadLine: "28/1/2024",
    },
    {
      Course_name: "قواعد البيانات",
      Assinment: "تصميم جدول قاعدة بيانات",
      Received: "2",
      DeadLine: "25/1/2024",
    },
    {
      Course_name: "تصميم واجهات المستخدم",
      Assinment: "تصميم واجهة جرافيكية",
      Received: "4",
      DeadLine: "27/1/2024",
    },
    {
      Course_name: "شبكات الحاسوب",
      Assinment: "تكوين شبكة محلية",
      Received: "6",
      DeadLine: "29/1/2024",
    },
    {
      Course_name: "تطوير تطبيقات الجوال",
      Assinment: "برمجة تطبيق للهواتف الذكية",
      Received: "3",
      DeadLine: "26/1/2024",
    },
    {
      Course_name: "أمان الشبكات",
      Assinment: "تقييم أمان الشبكة",
      Received: "5",
      DeadLine: "28/1/2024",
    },
    {
      Course_name: "علم البيانات",
      Assinment: "تحليل مجموعة بيانات",
      Received: "2",
      DeadLine: "25/1/2024",
    },
    {
      Course_name: "تقنيات الذكاء الاصطناعي",
      Assinment: "تصميم نظام ذكاء اصطناعي",
      Received: "4",
      DeadLine: "27/1/2024",
    },
    {
      Course_name: "تحليل البيانات",
      Assinment: "تحليل البيانات الكبيرة",
      Received: "6",
      DeadLine: "29/1/2024",
    },
    {
      Course_name: "تطوير البرمجيات",
      Assinment: "تطوير برنامج إدارة المشاريع",
      Received: "3",
      DeadLine: "26/1/2024",
    },
    {
      Course_name: "أساسيات الذكاء الاصطناعي",
      Assinment: "دراسة حالة في مجال الذكاء الاصطناعي",
      Received: "5",
      DeadLine: "28/1/2024",
    },
    {
      Course_name: "تصميم قواعد البيانات",
      Assinment: "تصميم قاعدة بيانات متقدمة",
      Received: "2",
      DeadLine: "25/1/2024",
    },
    {
      Course_name: "تطبيقات الويب المتقدمة",
      Assinment: "تطوير تطبيق ويب ديناميكي",
      Received: "4",
      DeadLine: "27/1/2024",
    },
    {
      Course_name: "أمان المعلومات",
      Assinment: "تقييم أمان نظام معلومات",
      Received: "6",
      DeadLine: "29/1/2024",
    },
  ],
};

function Assignment() {
  const handleTableButtonClick = (buttonText, rowData) => {
    // Handle button click based on the buttonText and rowData
    console.log(`Button "${buttonText}" clicked for row:`, rowData);
    // Add your custom logic here
  };

  return (
    <MyProTable
      pageTitle={"الوظائف"}
      tableData={initialData}
      onHandleTableButtonClick={handleTableButtonClick}
      btnTitle={"اضافة وظيفة"}
      detailesBtn={true}
      editBtn={false}
    />
  );
}

export default Assignment;
