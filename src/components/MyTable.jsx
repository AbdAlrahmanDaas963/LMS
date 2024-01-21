import React from "react";

import { Stack, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";

const rows = [
  createData("Frozen yoghurt", 159, "سسس", "حسام", "1234"),
  createData("Ice cream sandwich", 237, "حميد", "خالد", "5678"),
  createData("Eclair", 262, "حسام", "زيد", "9908"),
  createData("Cupcake", 305, "حميد", "نور", "1356"),
  createData("Gingerbread", 356, "زيد", "حميد", "6432"),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fff",
    color: theme.palette.common.black,
    fontWeight: "Bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function MyTable({
  columns,
  data,
  onButtonClick,
  detailesBtn = true,
  editBtn = true,
}) {
  const updatedColumns = [...columns, ""];

  const getRowWithButtons = (row) => {
    const buttonsColumn = (
      <Stack direction={"row"} justifyContent={"flex-end"} gap={"10px"}>
        {editBtn ? (
          <Button
            variant="text"
            color="primary"
            onClick={() => onButtonClick("Button 1", row)}
            startIcon={<EditIcon />}
            sx={{ gap: "10px" }}
          >
            تعديل
          </Button>
        ) : null}

        {detailesBtn ? (
          <Button
            variant="text"
            color="primary"
            style={{ marginLeft: "8px" }}
            onClick={() => onButtonClick("Button 2", row)}
            startIcon={<InfoIcon />}
            sx={{ gap: "10px" }}
          >
            التفاصيل
          </Button>
        ) : null}
        {/* <Button
          variant="text"
          color="primary"
          style={{ marginLeft: "8px" }}
          onClick={() => onButtonClick("Button 2", row)}
          startIcon={<InfoIcon />}
          sx={{ gap: "10px" }}
        >
          التفاصيل
        </Button> */}
      </Stack>
    );

    return { ...row, "": buttonsColumn };
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {updatedColumns.map((column, index) => (
              <StyledTableCell key={index} align="right">
                {column}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => {
            const rowWithButtons = getRowWithButtons(row);
            return (
              <StyledTableRow key={rowIndex}>
                {updatedColumns.map((column, colIndex) => (
                  <StyledTableCell key={colIndex} align="right">
                    {rowWithButtons[column]}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyTable;
