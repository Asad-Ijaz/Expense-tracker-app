import {useSelector} from 'react-redux'
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom'
function TotalIncomeExpense(){
    let income1 =useSelector(store=>store.addIncomeReducer.income);
    console.log('what are',income1);
    let expense1 =useSelector(store=>store.addExpenseReducer.used);
    let total = income1 - expense1;
    //let vv=useSelector(store=>store.addIncomeReducer.obectti.salary);
    //let vy = useSelector(store=>store.addIncomeReducer.user);
    
    return(
        <div>
           <h2>Total = {total}  <i>Pkr</i></h2>
              {/* <div>{useSelector(store=>store.addIncomeReducer.incomeArray.map((item)=>{return <p>Salary = {item.salary},Month = {'month',item.month},Date={item.date}</p>}))} </div>   */}
              <Grid container spacing={2}>
                  <Grid item md={3}></Grid>
            <Grid item md={3} className="income"><h1>+Income</h1><h3>{useSelector(store=>store.addIncomeReducer.salary)}   Pkr</h3></Grid>
            <Grid item md={3} className="income"><h1>-Expense</h1><h3>{useSelector(store=>store.addExpenseReducer.expense)} Pkr</h3></Grid>
            </Grid>
        </div>
    )
}
export default TotalIncomeExpense;
 