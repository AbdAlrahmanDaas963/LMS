import * as yup from "yup";

export const signupValidationsForm = {
  name: yup.string().required("حقل مطلوب"),
  email: yup.string().email("ادخل بريد الكتروني صالح").required("حقل مطلوب"),
  password: yup
    .string()
    .min(8, "كلمة المرور يجب ان تحوي 8 محارف على الاقل")
    .required("حقل مطلوب"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "كلمة المرور غير متطابقة")
    .required("حقل مطلوب"),
  stID: yup.number().required("الرقم الجامعي مطلوب"),
};

export const loginValidationsForm = {
  email: yup.string().email("ادخل بريد الكتروني صالح").required("حقل مطلوب"),
  password: yup
    .string()
    .min(8, "كلمة المرور يجب ان تحوي 8 محارف على الاقل")
    .required("حقل مطلوب"),

  stID: yup.number().required("الرقم الجامعي مطلوب"),
};
