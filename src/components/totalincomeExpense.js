import {useSelector} from 'react-redux'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Container';
function TotalIncomeExpense(){
   
    let income1 =useSelector(store=>store.addIncomeReducer.total);
    return(
       
            <Container  fixed className="income-expense grid">
                <Grid container spacing={2}>
                <Grid item md={12} sm={12}>
           <Typography variant="h1" component="h2">Total = {income1}  <i>Pkr</i></Typography>
           </Grid>
           </Grid>
    
            
              <Grid className="grid" container spacing={2}>

            <Grid item md={6} sm={6} xs={6}className="income"><h1>+Income</h1><h3>{useSelector(store=>store.addIncomeReducer.salary)}   Pkr</h3></Grid>
            <Grid item md={6} sm={6}  xs={6} className="income"><h1>-Expense</h1><h3>{useSelector(store=>store.addIncomeReducer.expense)} Pkr</h3></Grid>
            
            </Grid>
            </Container>
          
    )
}
export default TotalIncomeExpense;
 