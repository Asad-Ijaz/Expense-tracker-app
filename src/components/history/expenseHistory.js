import React from  'react'
import {useSelector,useDispatch} from 'react-redux'
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
  const dispatch = useDispatch();
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
         
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
      
    return(
      <Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="customized table">
        <TableHead className="expenseHis">
          <TableRow >
            <StyledTableCell className="theadrow" align="center">Month</StyledTableCell>
            <StyledTableCell className="theadrow" align="center">Expense</StyledTableCell>
            <StyledTableCell className="theadrow" align="center">Date</StyledTableCell>
            <StyledTableCell className="theadrow" align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody id="tbod">
          {useSelector(store=>store.addIncomeReducer.expenseHistoryArray.map((item,index) => (
            <StyledTableRow >
              <StyledTableCell align="center">{item.mont}</StyledTableCell>
              <StyledTableCell align="center">{item.expense}</StyledTableCell>
              <StyledTableCell align="center">{item.date}</StyledTableCell>
              <StyledTableCell align="center"><Button className="delete" variant="text" startIcon={<DeleteIcon />} onClick={(v)=>{
                dispatch({
                  type:"DELETE_EXPENSE-ITEM",
                  payload:index,
                  expense:item.expense,
                })
    }}>
              </Button></StyledTableCell>
            </StyledTableRow>
          )))}
        </TableBody>
      </Table>
    </TableContainer>
    </Typography>

    )
}
export default ExpenseHistory;