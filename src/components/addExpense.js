import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import expenseAction from '../redux/actions/expenseAction'
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



//import addExpenseReducer from '../redux/reducers/addExpenseReducer'
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  
function AddExpense(){
const dispatch = useDispatch();
  let [mont, setMont] = useState();
  let [expense, setExpense] = useState();

  function ctaHandler (e){
    e.preventDefault();
   let expenseVari2 = {
    mont,
    expense,
  
  }
console.log('data in expense component',expenseVari2 )

dispatch(expenseAction(expenseVari2));
setMont(mont="");
setExpense(expense="");

  }
    return(
      <Container fixed>
              <Grid  container spacing={2}>
                  <Grid item md={2} sm={0} xs={0}></Grid>
                <Grid  item md={8} sm={12} xs={12}>
                  <Item className="addExpense">Add Expense Transaction</Item>
                  <Divider/><br/>
                  <FormControl required variant="standard" className="select textfield " sx={{ m: 1,  }}>
        <InputLabel isRequired="true" ClassName="textfield" required={true} id="demo-simple-select-standard-label">Select Month</InputLabel>
        <Select
        className="jan"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
           value={mont}
           onChange={(e) =>{
            setMont(e.target.value)}}
           

           label="month"
           
        >
         
          <MenuItem  value={'January'}>January</MenuItem>
          <MenuItem value={'February'}>February</MenuItem>
          <MenuItem value={'March'}>March</MenuItem>
          <MenuItem value={'April'}>April</MenuItem>
          <MenuItem value={'May'}>May</MenuItem>
          <MenuItem value={'June'}>June</MenuItem>
          <MenuItem value={'July'}>July</MenuItem>
          <MenuItem value={'August'}>August</MenuItem>
          <MenuItem value={'September'}>September</MenuItem>
          <MenuItem value={'October'}>October</MenuItem>
          <MenuItem value={'November'}>November</MenuItem>
          <MenuItem value={'December'}>December</MenuItem>
        </Select>
      </FormControl><br/><br/>
                  {/* <TextField className="textfield" fullWidth id="text" value={mont} label="Enter Month" required variant="standard" onChange={(e)=>setMont(e.target.value)} /><br/><br/> */}
                  <TextField  className="textfield" type="number" fullWidth id="income" value={expense} label="Enter Expense" required variant="standard"  onChange={(e)=>setExpense(e.target.value)} />
                 
                  <br/><br/><br/>
                  <Button variant="contained" className="submitex" type="submit" onClick = {ctaHandler}>Submit</Button>
                  
                </Grid>
                <Grid item md={2} sm={0} xs={0}></Grid>
               
              </Grid>
            
          </Container>
        
    )
}
export default AddExpense;







