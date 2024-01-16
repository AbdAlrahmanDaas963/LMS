import React from "react";
import { Link } from "react-router-dom";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Stack, TextField, Button, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import MyTable from "../../components/MyTable";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, "سسس", "حسام", "1234"),
  createData("Ice cream sandwich", 237, "حميد", "خالد", "5678"),
  createData("Eclair", 262, "حسام", "زيد", "9908"),
  createData("Cupcake", 305, "حميد", "نور", "1356"),
  createData("Gingerbread", 356, "زيد", "حميد", "6432"),
];

function Students() {
  const theme = useTheme();
  const columns = ["Orange", "Calories", "stu_lastname", "stu_name", "stu_id"];
  const rows = [
    {
      Orange: "Ice cream sandwich",
      Calories: 159,
      stu_lastname: "سسس",
      stu_name: "حسام",
      stu_id: "1234",
    },
    {
      Orange: "Ice cream sandwich",
      Calories: 159,
      stu_lastname: "سسس",
      stu_name: "حسام",
      stu_id: "1234",
    },
    {
      Orange: "Ice cream sandwich",
      Calories: 159,
      stu_lastname: "سسس",
      stu_name: "حسام",
      stu_id: "1234",
    },
    {
      Orange: "Ice cream sandwich",
      Calories: 159,
      stu_lastname: "سسس",
      stu_name: "حسام",
      stu_id: "1234",
    },
    {
      Orange: "Ice cream sandwich",
      Calories: 159,
      stu_lastname: "سسس",
      stu_name: "حسام",
      stu_id: "1234",
    },
  ];
  return (
    <Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"25px"}
        sx={{ marginBottom: "50px" }}
      >
        <TextField
          id="standard-basic"
          label="بحث"
          variant="standard"
          sx={{ width: "400px" }}
        />
        <Button sx={{ backgroundColor: "var(--blue)" }} variant="contained">
          تحديث
        </Button>
      </Stack>
      <Stack alignItems={"center"} sx={{ marginBottom: "20px" }}>
        <Link to={"profile"}>
          <Button
            sx={{ gap: "10px", color: theme.palette.blue.main }}
            startIcon={<ArrowOutwardIcon />}
          >
            حسام سامؤ محمد
          </Button>
        </Link>
      </Stack>

      <MyTable columns={columns} data={rows} />
      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Orange</StyledTableCell>
              <StyledTableCell align="right">Calories</StyledTableCell>
              <StyledTableCell align="right">stu_lastname</StyledTableCell>
              <StyledTableCell align="right">stu_name</StyledTableCell>
              <StyledTableCell align="right">stu_id</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="right" component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </Stack>
  );
}

export default Students;
