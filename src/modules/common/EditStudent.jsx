import React from "react";

import { useNavigate, Link } from "react-router-dom";

import { withFormik } from "formik";
import * as yup from "yup";

import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";

import { message, Upload } from "antd";

const { Dragger } = Upload;

import MyPaper from "../../components/MyPaper";

function EditStudent2(props) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <MyPaper>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography>معلومات طالب</Typography>
        <Stack direction={"row"} gap={"10px"}>
          <Button
            startIcon={<CloseIcon />}
            variant="outlined"
            sx={{ gap: "10px", paddingRight: "0" }}
            onClick={goBack}
          >
            الغاء
          </Button>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            sx={{ gap: "10px", paddingRight: "0" }}
          >
            تأكيد
          </Button>
        </Stack>
      </Stack>
      <Stack></Stack>
    </MyPaper>
  );
}

const StudentForm = (props) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const { setFieldValue } = props;

  const handlePicChange = (info) => {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
      // Assuming you want to set the uploaded file to a form field
      setFieldValue("studentPicture", info.file);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  const theme = useTheme();

  return (
    <MyPaper>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography>معلومات طالب</Typography>

        <Stack direction={"row"} gap={"10px"}>
          <Button
            startIcon={<CloseIcon />}
            variant="outlined"
            sx={{ gap: "10px", paddingRight: "0" }}
            onClick={goBack}
          >
            الغاء
          </Button>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            sx={{ gap: "10px", paddingRight: "0" }}
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            تأكيد
          </Button>
        </Stack>
      </Stack>
      <form style={{ maxWidth: "350px" }} onSubmit={handleSubmit}>
        <Card sx={{ height: "100%", boxShadow: "0" }}>
          <CardContent>
            <Upload {...props} onChange={handlePicChange}>
              <div style={{ cursor: "pointer" }}>
                <img
                  src="your_placeholder_image_url"
                  alt="Student Picture"
                  style={{
                    width: "100%",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                />
                <div>Click to Upload</div>
              </div>
            </Upload>
            <TextField
              variant="outlined"
              id="firstName"
              label="الاسم"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.firstName ? errors.firstName : ""}
              error={touched.firstName && Boolean(errors.firstName)}
              margin="dense"
              fullWidth
            />
            <TextField
              variant="outlined"
              id="lastName"
              label="الكنية"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.lastName ? errors.lastName : ""}
              error={touched.lastName && Boolean(errors.lastName)}
              margin="dense"
              fullWidth
            />

            <TextField
              variant="outlined"
              id="studentId"
              label="الرقم الجامعي"
              value={values.studentId}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.studentId ? errors.studentId : ""}
              error={touched.studentId && Boolean(errors.studentId)}
              margin="dense"
              fullWidth
            />

            <TextField
              variant="outlined"
              id="certificate"
              label="نوع الشهادة"
              value={values.certificate}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.certificate ? errors.certificate : ""}
              error={touched.certificate && Boolean(errors.certificate)}
              margin="dense"
              fullWidth
            />

            <TextField
              variant="outlined"
              id="birth"
              label="المواليد"
              value={values.birth}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.birth ? errors.birth : ""}
              error={touched.birth && Boolean(errors.birth)}
              margin="dense"
              fullWidth
            />
            <TextField
              variant="outlined"
              id="nationality"
              label="الجنسية"
              value={values.nationality}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.nationality ? errors.nationality : ""}
              error={touched.nationality && Boolean(errors.nationality)}
              margin="dense"
              fullWidth
            />
            <TextField
              variant="outlined"
              id="collage"
              label="الكلية"
              value={values.collage}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.collage ? errors.collage : ""}
              error={touched.collage && Boolean(errors.collage)}
              margin="dense"
              fullWidth
            />
            <TextField
              variant="outlined"
              id="sex"
              label="الجنس"
              value={values.sex}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.sex ? errors.sex : ""}
              error={touched.sex && Boolean(errors.sex)}
              margin="dense"
              fullWidth
            />
          </CardContent>
          {/* <CardActions sx={{ flexDirection: "column" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: theme.palette.black.blue,
                width: "100%",
                height: "50px",
                borderRadius: "4px",
                marginTop: "10px",
              }}
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </CardActions> */}
        </Card>
      </form>
    </MyPaper>
  );
};

const EditStudent = withFormik({
  mapPropsToValues: ({
    firstName,
    lastName,
    studentId,
    certificate,
    birth,
    nationality,
    collage,
    sex,
    // Add more initial values as needed
  }) => {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      studentId: studentId || "",
      certificate: certificate || "",
      birth: birth || "",
      nationality: nationality || "",
      collage: collage || "",
      sex: sex || "",
    };
  },

  validationSchema: yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    studentId: yup.string().required("Student ID is required"),
    certificate: yup.string().required("certificate is required"),
    birth: yup.string().required("birth is required"),
    nationality: yup.string().required("nationality is required"),
    collage: yup.string().required("collage is required"),
    sex: yup.string().required("sex is required"),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // Submit to the server
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
})(StudentForm);

export default EditStudent;
