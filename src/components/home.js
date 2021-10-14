import React from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AddIncome from '../components/addIncome'
import AddExpense from '../components/addExpense'
import TotalIncomeExpense from '../components/totalincomeExpense'
import Appheading from '../components/appHeading'


function Home(){
    return(
        <Container fixed >
        <Typography>
            <Appheading/>
 
 <Grid className='fida' container spacing={0}>
 <Grid item md={3}></Grid> 
 <Grid item md={6}><TotalIncomeExpense/></Grid>
 <Grid item md={3}></Grid>
 </Grid>
 
 <Grid className=" grid" container >
 <Grid className="grid" item md={6} sm={12} xs={12}><AddIncome/></Grid>
 <Grid className="grid" item md={6} sm={12} xs={12}><AddExpense/></Grid>
 </Grid>
 

 <br></br><br></br><br></br>
        </Typography>
        </Container>
    )
}
export default Home;