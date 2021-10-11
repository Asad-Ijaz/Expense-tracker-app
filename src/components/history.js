import React ,{useState} from 'react'
import {useSelector} from 'react-redux'
import '../components/components.css'
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IncomeHistory from '../components/history/incomeHistory'
import ExpenseHistory from '../components/history/expenseHistory'
import incomeAction from '../redux/actions/incomeAction'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useDispatch} from 'react-redux'



function History(){
   
   return(
  
    <div>
        <div  className="historyhead"><h1><Link className="historyheadhome" to="/">Home</Link></h1></div>
      
        <Container fixed>
        <Grid container spacing={2}>
                  <Grid item md={6}> 
                <IncomeHistory/>

                  </Grid>
                  <Grid item md={6}> <ExpenseHistory/></Grid>
                  </Grid>
    </Container>
    
        </div>
       
    )
}
export default History;