import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table/Table';
import TableBody from '@mui/material/TableBody/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function AdminPage() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(status, name, email, phone, address, address2, about, whyYou, file, video, admin) {
    return { status, name, email, phone, address, address2, about, whyYou, file, video, admin};
  }

  const rows = [
    createData('Pending', 'Fred Savage', 'f.savage@yahoo.com', 6543219871, '123 Court Rd', 'Chisholm, MN 55123', 'I can juggle and ride a bike!', 'I was on the honor roll for 3 years and graduated Summa Cum Laude', './myEssay.docx', 'https://youtube.com/example', 'Input notes here'),
    createData('Selected', 'Bill Theodore', 'b.t123@yahoo.com', 7891234567, '456 Street Rd', 'Chisholm, MN 55123', 'I am an accomplished pianist and skilled painter.', 'I have an acceptance letter to Stanford University', './ICopiedFred.docx', 'https://youtube.com/example2', 'Input notes here'),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
            <StyledTableCell>Address</StyledTableCell>
            <StyledTableCell>Address2</StyledTableCell>
            <StyledTableCell>About You</StyledTableCell>
            <StyledTableCell>Why You</StyledTableCell>
            <StyledTableCell>Essay File</StyledTableCell>
            <StyledTableCell>Video</StyledTableCell>
            <StyledTableCell>Admin Notes</StyledTableCell>
            <StyledTableCell>Edit</StyledTableCell>
            <StyledTableCell>Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.status}
              </StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.phone}</StyledTableCell>
              <StyledTableCell>{row.address}</StyledTableCell>
              <StyledTableCell>{row.address2}</StyledTableCell>
              <StyledTableCell>{row.about}</StyledTableCell>
              <StyledTableCell>{row.whyYou}</StyledTableCell>
              <StyledTableCell>{row.file}</StyledTableCell>
              <StyledTableCell>{row.video}</StyledTableCell>
              <StyledTableCell>{row.admin}</StyledTableCell>
              <StyledTableCell><button>Edit</button></StyledTableCell>
              <StyledTableCell><button>Delete</button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminPage;
