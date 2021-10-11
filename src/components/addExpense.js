import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import expenseAction from '../redux/actions/expenseAction'


//import addExpenseReducer from '../redux/reducers/addExpenseReducer'
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  
function AddExpense(){
const dispatch = useDispatch();
  let [goods, setGoods] = useState();
  let [expense, setExpense] = useState();
  //const[expenseArray,setExpenseArray]=useState([]);
  let [used,setUsed] = useState(0);
  const[date,setDate]= useState(new Date().toLocaleString());

  function ctaHandler (e){
   let expenseVari = {
     goods,
     expense,
     date,
   }
   setUsed(used=(parseInt(used)+parseInt(expense)))
   let expenseVari2 = {
    goods,
    expense,
    date,
    used,
  
  }
   setDate(new Date().toLocaleString(expenseVari));
   //setExpenseArray((expenseArray.concat(expenseVari)));
   setUsed(used=(parseInt(used)+parseInt(expense)))


dispatch(expenseAction(expenseVari2));
setGoods(goods="");
setExpense(expense="");

  }
    return(
           
              <Grid  container spacing={2}>
                  <Grid item md={3}></Grid>
                <Grid  item xs={6}>
                  <Item className="addExpense">Add Expense Transaction</Item>
                  <Divider/><br/>
                  <TextField fullWidth id="text" value={goods} label="Enter Goods" required variant="standard" onChange={(e)=>setGoods(e.target.value)} /><br/><br/>
                  <TextField fullWidth id="income" value={expense} label="Enter Expense" required variant="standard"  onChange={(e)=>setExpense(e.target.value)} />
                  <br/><br/><br/>
                  <Button variant="contained" className="submitex" type="submit" onClick = {ctaHandler}>Submit</Button>
                </Grid>
                <Grid item md={3}></Grid>
               
              </Grid>
            
          
        
    )
}
export default AddExpense;







