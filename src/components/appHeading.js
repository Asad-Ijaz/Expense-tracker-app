import React from 'react'
import Grid from '@mui/material/Grid';
import '../components/components.css';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Appheading(){
    return(
        <Typography>
      <Container fixed>
    <Grid container spacing={2}>
<Grid item md={10} sm={8} xs={8}><h1 className="appHeading"> Expense Tracker App</h1></Grid>
 <Grid item md={2} sm={4} xs={4}><Button variant="contained" style={{marginTop:20,fontWeight:700 }}><Link className="link" to='/history'>History</Link></Button></Grid> 
</Grid> 
</Container>
</Typography>
    )
}
export default Appheading;