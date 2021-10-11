import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import incomeAction from '../redux/actions/incomeAction'
import '../components/components.css'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  
function AddIncome(){
  const dispatch = useDispatch();
  let [month,setMonth]= useState('');
  let [salary,setSalary] = useState('');
  let [id,setId] = useState(-1);
let [income,setIncome] = useState(0);
//const[incomeArray,setIncomeArray]=useState([]);
//console.log(incomeArray);
//console.log(incomeArray);
const[date,setDate]= useState(new Date().toLocaleString());
function CtaHandler(e){
 
    e.preventDefault();
   let data1 ={
     salary,
     month,
     date,
   }
    
     setDate(new Date().toLocaleString());


     
       // setIncomeArray([...incomeArray,data1]);
        // (incomeArray.concat(data1));
  
   //console.log(incomeArray)

setId(id=id+1);
     setIncome(income=(parseInt(income)+parseInt(salary)));
     let data10={
       salary,
       month,
       date,
       income,
       id,
       //incomeArray,
       
       
      }
      //console.log('income',incomeArray);
      // setIncomeArray({incomeArray:incomeArray.concat(data1)});

   console.log('data in component', data10);
  //  setIncomeArray(...incomeArray,data1);
   dispatch(incomeAction(data10));
   //dispatch(incomeAction(data10));
    setSalary(salary='');
    setMonth(month='');
   
}



    return(
           
              <Grid container spacing={2}>
                  <Grid item md={3}></Grid>
                <Grid item xs={6}>
                 
                  <Item>Add Income Transaction</Item>
                  <Divider/><br/><br/>
                  <div>
                  <FormControl variant="standard" className="select" sx={{ m: 1,  }}>
        <InputLabel id="demo-simple-select-standard-label">Select Month</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
           value={month}
           onChange={(e) =>{
            setMonth(e.target.value)}}
           required

           label="month"
           required
        >
         
          <MenuItem value={'January'}>January</MenuItem>
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
      </FormControl>
     
    </div>
                  
                  {/* <TextField InputLabelProps={{style : {color : 'white'} }}  fullWidth name="name" id="text" label="Enter Month" value={month} onChange={(e) =>
                    {
                      // setIncomeArray([...incomeArray, e.target.value]);
                     setMonth(e.target.value)} } variant="standard" /><br/><br/> */}
                  <TextField fullWidth name="amount"id="income" label="Enter Salary" required value={salary} 
                   onChange={(e) =>{
                    setSalary(e.target.value);
                    //  setIncomeArray([...incomeArray, e.target.value]);
           
          }}  variant="standard" />
                   <br/><br/><br/>
                   <Button variant="contained" className="submit" type="submit"
                    onClick={ CtaHandler } >Submit</Button>
                   
                   
                </Grid>
                <Grid item md={3}></Grid>
               
              </Grid>
            
          
        
    )
}
export default AddIncome;