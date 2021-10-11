import React from 'react'
import Grid from '@mui/material/Grid';
import '../components/components.css';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button'
import {useSelector} from 'react-redux';
function Appheading(){
   // let income=useSelector(store=>store.addIncomeReducer.obectti.user1.map((item)=>
//{return <p>{item.salary}{item.month}{item.date}</p>}));
    //let vv=useSelector(store=>store.addIncomeReducer.obectti.month);
    //console.log(vv);
    return(
        <div>
           
        

 <Grid container spacing={2}>
<Grid item md={10}><h1 className="appHeading"> Expense Tracker App</h1></Grid>
 <Grid item md={2}><Button variant="contained" style={{marginTop:20,fontWeight:700 }}><Link className="link" to='/history'>History</Link></Button></Grid> 
</Grid> 
</div>
    )
}
export default Appheading;