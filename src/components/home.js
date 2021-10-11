import React from 'react'
import Grid from '@mui/material/Grid';
import AddIncome from '../components/addIncome'
import AddExpense from '../components/addExpense'
import TotalIncomeExpense from '../components/totalincomeExpense'
import Appheading from '../components/appHeading'
import '../components/components.css'
// import {useSelector} from 'react-redux'

function Home(){
    return(
        <div>
            
            <Appheading/>
 
 <Grid className='fida' container spacing={0}>
 <Grid item md={3}></Grid> 
 <Grid item md={6}><TotalIncomeExpense/></Grid>
 <Grid item md={3}></Grid>
 </Grid>
 <Grid   container spacing={0}>
 <Grid item md={2}></Grid>
 <Grid item md={8}>
 <Grid className="fida" container>
 <Grid item md={6}><AddIncome/></Grid>
 <Grid item md={6}><AddExpense/></Grid>
 </Grid>
 </Grid>
  {/* <Grid item md={2}>{useSelector(store=>store.addExpenseReducer.expenseArray.map((item)=>{return <p>Goods = {item.goods},Expense = {'month',item.expense},Date={item.date}</p>}))}</Grid>  */}
 </Grid>
        </div>
    )
}
export default Home;