import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import incomeAction from '../redux/actions/incomeAction'
import '../components/components.css'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
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
  let[date,setDate]= useState(new Date().toLocaleString());


function CtaHandler(e){
  e.preventDefault();
     setDate(new Date().toLocaleString());
     let incomeData={
       salary,
       month,
       date,
        }

   console.log('data in component', incomeData);
 
   dispatch(incomeAction(incomeData));
   
    setSalary(salary='');
    setMonth(month='');
   
}
return(
  <Container fixed>
           <Grid container spacing={2}>
                  <Grid item md={2} sm={0} xs={0}></Grid>
                <Grid item md={8} sm={12} xs={12}>
                 
                  <Item>Add Income Transaction</Item>
                  <Divider/><br/>
                  <div>
                  <FormControl required variant="standard" className="select textfield " sx={{ m: 1,  }}>
        <InputLabel isRequired="true" ClassName="textfield" required={true} id="demo-simple-select-standard-label">Select Month</InputLabel>
        <Select
        className="jan"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
           value={month}
           onChange={(e) =>{
            setMonth(e.target.value)}}
           

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
      </FormControl>
     
    </div>
    <br/>
                
                  <TextField required={true} type="number" className="textfield" fullWidth name="amount"id="income" isRequired="true" label="Enter Salary"  value={salary} 
                   onChange={(e) =>{
                    setSalary(e.target.value);}}  variant="standard" />
                   <br/><br/><br/>
                   <Button variant="contained" className="submit" type="submit"
                    onClick={ CtaHandler } >Submit</Button>
                   
                   </Grid>
                <Grid item md={2} sm={0} xs={0}></Grid>
               
              </Grid>
            </Container>
          
        
    )
}
export default AddIncome;