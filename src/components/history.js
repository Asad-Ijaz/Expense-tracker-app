import React  from 'react'
import '../components/components.css'
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IncomeHistory from '../components/history/incomeHistory'
import ExpenseHistory from '../components/history/expenseHistory'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import {useDispatch} from 'react-redux'



function History(){
        const dispatch = useDispatch();
   return(
  
    <Typography>
      <Container fixed>
      <Grid container spacing={2}>
      <Grid item md={9} sm={8} xs={6} spacing={2}  className="historyhead"><h1><Link className="historyheadhome" to="/">Home</Link></h1></Grid>
      <Grid item md={3} sm={4} xs={6} > <Button className="clearHis" variant="contained" onClick={(()=>{
            dispatch({
              type:'clear_All_History',
            })
        })}>Clear History</Button>
        </Grid>
        </Grid>
        </Container>
        <Container fixed>
        <Grid className="history" container spacing={2}>
            <Grid item md={6} > 
               <IncomeHistory/>
            </Grid>
            <Grid item md={6}> <ExpenseHistory/></Grid>
            </Grid>
    </Container>
    
        </Typography>
       
    )
}
export default History;