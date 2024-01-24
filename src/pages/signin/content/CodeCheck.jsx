import React, { useState, useRef } from "react";
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

import aust from "../../../assets/svg/aust.svg";

function CodeCheck() {
  const theme = useTheme();

  const inputRefs = Array(6)
    .fill(0)
    .map((_, i) => useRef(null));
  const [inputValues, setInputValues] = useState(Array(6).fill(""));

  const handleChange = (index) => (event) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;

    setInputValues(newInputValues);

    // Move focus to the next input if there is a value
    if (event.target.value !== "" && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Combine the six digits into a single string
    const userInput = inputValues.join("");

    // Check if userInput is a 6-digit number
    const isValidInput = /^\d{6}$/.test(userInput);

    if (isValidInput) {
      // Perform signup or further actions
      console.log("Valid input:", userInput);
    } else {
      // Handle invalid input (show error message, etc.)
      console.error("Invalid input. Please enter a 6-digit number.");
    }
  };

  return (
    <Stack
      sx={{
        position: "absolute",
        left: "0",
        height: "100vh",
        width: "600px",
        minHeight: "600px",
        display: "Flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center",
        // border: "1px solid blue",
        backgroundColor: "#fff",
        overflowY: "auto",
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
          للاسف حابب تتعلم
        </Typography>
      </Stack>
      <Stack>
        <Typography sx={{ fontWeight: "bold", marginBottom: "50px" }}>
          يرجى ادخال رمز التحقق المرسل الى البريد الالكتروني
        </Typography>
        <Stack direction={"row-reverse"}>
          {inputValues.map((value, index) => (
            <TextField
              sx={{
                width: "40px",
                textAlign: "center",
                backgroundColor: theme.palette.white.main,
                border: "0",
                margin: "0 15px",
              }}
              key={index}
              // label={`Digit ${index + 1}`}
              variant="outlined"
              fullWidth
              value={value}
              onChange={handleChange(index)}
              inputProps={{
                maxLength: 1,
              }}
              inputRef={inputRefs[index]}
            />
          ))}
        </Stack>
      </Stack>
      <Stack justifyContent={"center"} direction={"row"}>
        <Link to={"/student"}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: theme.palette.black.main,
              width: "300px",
              height: "50px",
              borderRadius: 15,
              marginTop: "10px",
            }}
          >
            تأكيد
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}

export default CodeCheck;
