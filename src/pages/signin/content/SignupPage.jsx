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
import { useTheme } from "@emotion/react";

import { signupValidationsForm } from "../validations/validationSchema";
import { withFormik } from "formik";
import * as yup from "yup";

import aust from "../../../assets/svg/aust.svg";
import books from "../../../assets/svg/background.svg";

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
    <Stack
      sx={{
        position: "absolute",
        left: "0",
        height: "100vh",
        width: "600px",
        minHeight: "600px",
        display: "Flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        // border: "1px solid blue",
        backgroundColor: "#fff",
        overflowY: "auto",
        borderRadius: "4px",
        boxShadow: "4px 4px 10.4px 4px rgba(0, 0, 0, 0.13)",
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
          سجل الان
        </Typography>
      </Stack>
      <form style={{ maxWidth: "350px" }} onSubmit={handleSubmit}>
        <Card sx={{ height: "100%", margin: "50px 0", boxShadow: "0" }}>
          <CardContent>
            <TextField
              id="name"
              label="اسم المستخدم"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.name ? errors.name : ""}
              error={touched.name && Boolean(errors.name)}
              margin="dense"
              variant="standard"
              fullWidth
            />
            <TextField
              id="email"
              label="البريد الالكتروني"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.email ? errors.email : ""}
              error={touched.email && Boolean(errors.email)}
              margin="dense"
              variant="standard"
              fullWidth
            />
            <TextField
              id="stID"
              label="الرقم الجامعي"
              value={values.stID}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.stID ? errors.stID : ""}
              error={touched.stID && Boolean(errors.stID)}
              margin="dense"
              variant="standard"
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
            <TextField
              id="confirmPassword"
              label="تأكيد كلمة المرور"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.confirmPassword ? errors.confirmPassword : ""}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              margin="dense"
              variant="standard"
              fullWidth
            />
          </CardContent>
          <CardActions sx={{ flexDirection: "column" }}>
            <Stack
              // sx={{ width: "350px" }}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.blue.main,
                  width: "350px",
                  height: "50px",
                  borderRadius: "4px",
                  marginTop: "10px",
                }}
                disabled={isSubmitting}
              >
                تسجيل حساب
              </Button>
              {/* <Link to={"/reg/codecheck"}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.blue.main,
                    width: "350px",
                    height: "50px",
                    borderRadius: "4px",
                    marginTop: "10px",
                  }}
                  disabled={isSubmitting}
                >
                  تسجيل حساب
                </Button>
              </Link> */}
              {/* <Button color="secondary" onClick={handleReset}>
                  CLEAR
                </Button> */}
            </Stack>
          </CardActions>
        </Card>
      </form>
      <Stack justifyContent={"center"} direction={"row"}>
        <Typography>لديك حساب بالفعل؟</Typography>
        <Link
          style={{ fontWeight: "bold", color: "var(--blue)", margin: "0 10px" }}
          to={"/reg/login"}
        >
          سجل دخولك
        </Link>
      </Stack>
    </Stack>
    // <Grid
    //   container
    //   sx={{
    //     width: "100vw",
    //     height: "100vh",
    //     flexDirection: "row",
    //     backgroundColor: "#EAE9EA",
    //   }}
    // >
    //   <Grid xs={0} sm={4} md={8} sx={{ height: "100%", overflow: "hidden" }}>
    //     <img src={books} alt="" height={"100%"} />
    //   </Grid>

    //   <Grid
    //     xs={12}
    //     sm={8}
    //     md={4}
    //     sx={{
    //       display: "Flex",
    //       justifyContent: "center",
    //       flexDirection: "column",
    //       alignItems: "center",
    //       // border: "1px solid blue",
    //       backgroundColor: "#fff",
    //       overflowY: "auto",
    //     }}
    //   >
    //     <Stack alignItems={"center"} justifyContent={"center"}>
    //       <img src={aust} alt="" width={90} />
    //       <Typography
    //         sx={{
    //           fontFamily: "'DroidKufi', sans-serif",
    //           fontWeight: "bold",
    //           fontSize: 20,
    //         }}
    //       >
    //         للاسف حابب تتعلم
    //       </Typography>
    //     </Stack>
    //     <form style={{ maxWidth: "350px" }} onSubmit={handleSubmit}>
    //       <Card sx={{ height: "100%", margin: "50px 0", boxShadow: "0" }}>
    //         <CardContent>
    //           <TextField
    //             id="name"
    //             label="اسم المستخدم"
    //             value={values.name}
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             helperText={touched.name ? errors.name : ""}
    //             error={touched.name && Boolean(errors.name)}
    //             margin="dense"
    //             variant="standard"
    //             fullWidth
    //           />
    //           <TextField
    //             id="email"
    //             label="البريد الالكتروني"
    //             type="email"
    //             value={values.email}
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             helperText={touched.email ? errors.email : ""}
    //             error={touched.email && Boolean(errors.email)}
    //             margin="dense"
    //             variant="standard"
    //             fullWidth
    //           />
    //           <TextField
    //             id="stID"
    //             label="الرقم الجامعي"
    //             value={values.stID}
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             helperText={touched.stID ? errors.stID : ""}
    //             error={touched.stID && Boolean(errors.stID)}
    //             margin="dense"
    //             variant="standard"
    //             fullWidth
    //           />
    //           <TextField
    //             id="password"
    //             label="كلمة المرور"
    //             type="password"
    //             value={values.password}
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             helperText={touched.password ? errors.password : ""}
    //             error={touched.password && Boolean(errors.password)}
    //             margin="dense"
    //             variant="standard"
    //             fullWidth
    //           />
    //           <TextField
    //             id="confirmPassword"
    //             label="تأكيد كلمة المرور"
    //             type="password"
    //             value={values.confirmPassword}
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             helperText={
    //               touched.confirmPassword ? errors.confirmPassword : ""
    //             }
    //             error={
    //               touched.confirmPassword && Boolean(errors.confirmPassword)
    //             }
    //             margin="dense"
    //             variant="standard"
    //             fullWidth
    //           />
    //         </CardContent>
    //         <CardActions sx={{ flexDirection: "column" }}>
    //           <Stack
    //             sx={{ width: "90%" }}
    //             direction={"row"}
    //             alignItems={"center"}
    //             justifyContent={"center"}
    //           >
    //             <Button
    //               type="submit"
    //               variant="contained"
    //               sx={{
    //                 backgroundColor: theme.palette.black.main,
    //                 width: "100%",
    //                 height: "50px",
    //                 borderRadius: 15,
    //                 marginTop: "10px",
    //               }}
    //               disabled={isSubmitting}
    //             >
    //               تسجيل حساب
    //             </Button>
    //             {/* <Button color="secondary" onClick={handleReset}>
    //               CLEAR
    //             </Button> */}
    //           </Stack>
    //         </CardActions>
    //       </Card>
    //     </form>
    //     <Stack justifyContent={"center"} direction={"row"}>
    //       <Typography>لديك حساب بالفعل؟</Typography>
    //       <Link style={{ fontWeight: "bold" }} to={"/login"}>
    //         سجل دخولك
    //       </Link>
    //     </Stack>
    //   </Grid>
    // </Grid>
  );
};

const Form = withFormik({
  mapPropsToValues: ({ name, email, stID, password, confirmPassword }) => {
    return {
      name: name || "",
      email: email || "",
      stID: stID || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
    };
  },

  validationSchema: yup.object().shape(signupValidationsForm),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit to the server
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
})(form);

export default Form;
