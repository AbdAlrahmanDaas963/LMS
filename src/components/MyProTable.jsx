// ? students, assignments, one assignment, edit one assignment, courses,
// header => {title}, {2 buttons}
// body => search bar, {dropdown filter}
// table => {data} and {2 buttons} in the last column

// ? used => instructor/students

import React, { useState, useEffect } from "react";

import {
  Stack,
  TextField,
  Button,
  Typography,
  MenuItem,
  FormControl,
  Box,
  Select,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import MyTable from "./MyTable";
import MyPaper from "./MyPaper";

function MyProTable({
  pageTitle,
  btnTitle,
  onHandleHeaderButtonClick,
  filters,
  tableData,
  onHandleTableButtonClick,
  detailesBtn,
  editBtn,
  downloadBtn,
}) {
  const [data, setData] = useState(tableData);

  const [rowsLimit, setRowsLimit] = useState(15);
  const [filterdData, setFilteredData] = useState(tableData.rows);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    const firstColumn = data.columns[0];

    const filtered = tableData.rows.filter((item) =>
      item[firstColumn].toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filtered.slice(0, rowsLimit));
  };

  function handleButtonClick(buttonText, rowData) {
    // Handle the button click event here
    console.log(`Button "${buttonText}" clicked for row:`, rowData);
    onHandleTableButtonClick(buttonText, rowData);
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
        <Typography fontWeight={"bold"}>{pageTitle}</Typography>
        <Button variant="contained">{btnTitle}</Button>
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
            label="البحث عن مادة"
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
              <MenuItem value={999} defaultValue>
                اظهار جميع المواد
              </MenuItem>
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
        detailesBtn={detailesBtn}
        editBtn={editBtn}
        downloadBtn={downloadBtn}
      />
    </MyPaper>
  );
}

export default MyProTable;
