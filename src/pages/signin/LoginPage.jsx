import React from "react";
import { Link } from "react-router-dom";

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
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@emotion/react";

import { loginValidationsForm } from "./validations/validationSchema";
import { withFormik } from "formik";
import * as yup from "yup";

import aust from "../../assets/svg/aust.svg";

const form = (props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;

  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        width: "100vw",
        height: "100vh",
        flexDirection: "row",
        backgroundColor: theme.palette.white.main,
      }}
    >
      <Grid xs={0} sm={4} md={6}>
        books
      </Grid>

      <Grid
        xs={12}
        sm={8}
        md={6}
        sx={{
          display: "Flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid blue",
          backgroundColor: "#fff",
        }}
      >
        <Stack alignItems={"center"} justifyContent={"center"}>
          <img src={aust} alt="" width={90} />
          <Typography
            sx={{
              fontFamily: "'DroidKufi', sans-serif",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            مرحبا مجددا
          </Typography>
        </Stack>
        <form style={{ maxWidth: "350px" }} onSubmit={handleSubmit}>
          <Card sx={{ height: "100%", margin: "100px 0", boxShadow: "0" }}>
            <CardContent>
              <TextField
                variant="standard"
                id="email"
                label="البريد الالكتروني"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                margin="dense"
                fullWidth
              />
              <TextField
                id="password"
                label="كلمة المرور"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
                margin="dense"
                variant="standard"
                fullWidth
              />
            </CardContent>
            <CardActions sx={{ flexDirection: "column" }}>
              <Stack
                sx={{ width: "90%" }}
                direction={"row-reverse"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>نسيت كلمة المرور؟</Typography>
                <Typography>تذكرني</Typography>
              </Stack>
              <Stack
                sx={{ width: "90%" }}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button type="submit" color="primary" disabled={isSubmitting}>
                  SUBMIT
                </Button>
                <Button color="secondary" onClick={handleReset}>
                  CLEAR
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </form>
        <Stack justifyContent={"center"} direction={"row"}>
          <Typography>ليس لديك حساب؟</Typography>
          <Link style={{ fontWeight: "bold" }} to={"/signup"}>
            سجل الأن
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

const Form = withFormik({
  mapPropsToValues: ({
    website,
    name,
    surname,
    email,
    course,
    password,
    confirmPassword,
  }) => {
    return {
      website: website || "",
      name: name || "",
      surname: surname || "",
      email: email || "",
      course: course || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
    };
  },

  validationSchema: yup.object().shape(loginValidationsForm),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit to the server
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
})(form);

export default Form;
