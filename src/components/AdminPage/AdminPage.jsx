import React from 'react';
import { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table/Table';
import TableBody from '@mui/material/TableBody/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './AdminPage.css'

function AdminPage() {
  const admin = useSelector(store => store.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ 
      type: 'FETCH_ADMIN' 
    });
  }, []);

  function editApp(id) {
    console.log('clicked the edit button', id);
    history.push('/admin/:id');
  }

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

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
            <StyledTableCell>Street Address</StyledTableCell>
            <StyledTableCell>City, State, Zip</StyledTableCell>
            <StyledTableCell>About You</StyledTableCell>
            <StyledTableCell>Why You</StyledTableCell>
            <StyledTableCell>Essay File</StyledTableCell>
            <StyledTableCell>Video</StyledTableCell>
            <StyledTableCell>Admin Notes</StyledTableCell>
            <StyledTableCell>Votes</StyledTableCell>
            <StyledTableCell>Edit</StyledTableCell>
            <StyledTableCell>Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admin && admin.map((app) => (
            <StyledTableRow key={app.id}>
              <StyledTableCell component="th" scope="row">{app.status}</StyledTableCell>
              <StyledTableCell>{app.name}</StyledTableCell>
              <StyledTableCell>{app.email}</StyledTableCell>
              <StyledTableCell>{app.phone}</StyledTableCell>
              <StyledTableCell>{app.address}</StyledTableCell>
              <StyledTableCell>{app.address2}</StyledTableCell>
              <StyledTableCell>{app.about}</StyledTableCell>
              <StyledTableCell>{app.whyYou}</StyledTableCell>
              <StyledTableCell>{app.file}</StyledTableCell>
              <StyledTableCell>{app.video}</StyledTableCell>
              <StyledTableCell>{app.comment}</StyledTableCell>
              <StyledTableCell>{app.vote}</StyledTableCell>
              <StyledTableCell><Link to={`/admin/${app.id}`}><button className="edit-btn" onClick={()=>editApp(app.id)}><img src="./images/edit-icon-pencil-sign-up-vector-185156202.jpeg"/>Edit</button></Link></StyledTableCell>
              <StyledTableCell><button className="delete-btn"><img src="./images/0-5523_red-cross-clipart-not-check-box-with-x.png"/>Delete</button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminPage;