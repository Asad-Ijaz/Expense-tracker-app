import React from  'react'
import {useSelector} from 'react-redux'
//import '../components/components.css'
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
function ExpenseHistory(){
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
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
      function dltHistory(e){
        var tbod=document.getElementById('tbod');
        tbod.innerHTML="";
         // v.currentTarget.parentNode.parentNode.remove()
        }
    return(
        <div>
         <Button className="clearHis" variant="contained" onClick={dltHistory}>Clear History</Button>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="customized table">
        <TableHead className="expenseHis">
          <TableRow >
          <StyledTableCell align="center">No:</StyledTableCell>
            <StyledTableCell align="center">Goods</StyledTableCell>
            <StyledTableCell align="center">Expense</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody id="tbod">
          {useSelector(store=>store.addExpenseReducer.usedArray.map((item,index) => (
            <StyledTableRow >
              {/* <StyledTableCell component="th" scope="row">
                {item.month}
              </StyledTableCell> */}
              <StyledTableCell align="center">{index}</StyledTableCell>
              <StyledTableCell align="center">{item.goods}</StyledTableCell>
              <StyledTableCell align="center">{item.expense}</StyledTableCell>
              <StyledTableCell align="center">{item.date}</StyledTableCell>
              <StyledTableCell align="center"><Button variant="text" startIcon={<DeleteIcon />} onClick={(v)=>{
    return store.addExpenseReducer.usedArray.splice(index,1),
              v.currentTarget.parentNode.parentNode.remove()}}>
              </Button></StyledTableCell>
            </StyledTableRow>
          )))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

    )
}
export default ExpenseHistory;