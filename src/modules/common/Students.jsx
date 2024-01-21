import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  Stack,
  TextField,
  Button,
  useTheme,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Box,
  Select,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import MyTable from "../../components/MyTable";
import MyPaper from "../../components/MyPaper";

const initialData = {
  columns: ["Full_name", "ID", "Collage", "Year", "Hours"],
  rows: [
    {
      Full_name: "حميد بزنكو",
      ID: "2017367743",
      Collage: "الهندسة المعلوماتية",
      Year: "السنة الثالثة",
      Hours: "144",
    },
    {
      Full_name: "حميد بزنكو",
      ID: "2017367743",
      Collage: "الهندسة المعلوماتية",
      Year: "السنة الثالثة",
      Hours: "144",
    },
    {
      Full_name: "علي أحمد",
      ID: "2017456789",
      Collage: "الهندسة المعلوماتية",
      Year: "السنة الثانية",
      Hours: "120",
    },
    {
      Full_name: "فاطمة محمد",
      ID: "2017543210",
      Collage: "الهندسة المدنية",
      Year: "السنة الرابعة",
      Hours: "180",
    },
    ,
    {
      Full_name: "سارة علي",
      ID: "2017634567",
      Collage: "الهندسة الكهربائية",
      Year: "السنة الأولى",
      Hours: "100",
    },
    {
      Full_name: "يوسف مصطفى",
      ID: "2017723456",
      Collage: "الهندسة الميكانيكية",
      Year: "السنة الخامسة",
      Hours: "200",
    },
    {
      Full_name: "نورا حسن",
      ID: "2017812345",
      Collage: "الهندسة الكهربائية",
      Year: "السنة الثانية",
      Hours: "130",
    },
    {
      Full_name: "أحمد عبدالله",
      ID: "2017901234",
      Collage: "الهندسة المدنية",
      Year: "السنة الثالثة",
      Hours: "160",
    },
    {
      Full_name: "ليلى محمد",
      ID: "2017098765",
      Collage: "الهندسة المعلوماتية",
      Year: "السنة الخامسة",
      Hours: "190",
    },
  ],
};

function Students() {
  const navigate = useNavigate();

  // ? backend or redux store
  const [data, setData] = useState(initialData);

  const [rowsLimit, setRowsLimit] = useState(15);
  const [filterdData, setFilteredData] = useState(initialData.rows);
  const [inputValue, setInputValue] = useState("");

  const theme = useTheme();

  const handleSearch = () => {
    const filtered = initialData.rows.filter((course) =>
      course.Full_name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filtered.slice(0, rowsLimit));
  };

  function handleButtonClick(buttonText, rowData) {
    // Handle the button click event here
    console.log(`Button "${buttonText}" clicked for row:`, rowData);
    if (buttonText === "Button 2") navigate("profile");
    else console.log("not");
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setRowsLimit(value);
  };

  useEffect(() => {
    // Update filteredResources when rowsLimit or inputValue changes
    handleSearch();
  }, [rowsLimit, inputValue]);

  return (
    <MyPaper>
      {/* head */}
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography fontWeight={"bold"}>الطلاب</Typography>
        <Link to={"profile"}>
          <Button variant="contained">اضافة طالب</Button>
        </Link>
      </Stack>

      {/* controllers */}
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack
          direction={"row"}
          sx={{
            marginBottom: "20px",
          }}
        >
          <Button onClick={handleSearch}>
            <SearchIcon htmlColor="var(--whitesecondary)" />
          </Button>
          <TextField
            sx={{ width: "300px" }}
            id="standard-basic"
            label="البحث عن طالب - كلية - سنة - رقم جامعي"
            variant="standard"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Stack>
        <Box sx={{ width: "200px" }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={rowsLimit}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={5} defaultValue>
                اظهار 5 صفوف
              </MenuItem>
              <MenuItem value={10}>اظهار 10 صفوف</MenuItem>
              <MenuItem value={15}>اظهار 15 صف</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>

      {/* table */}
      <MyTable
        columns={data.columns}
        data={filterdData}
        onButtonClick={handleButtonClick}
      />
    </MyPaper>
  );
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
