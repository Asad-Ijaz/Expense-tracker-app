import React from 'react'
import {BrowserRouter as Router,Route,} from 'react-router-dom'
import Home from '../components/home'
import History from '../components/history'

function RouterApp(){
    return(
        <Router>
            <Route exact path='/' component={Home}/>
            <Route exact path='/history' component={History}/>
        </Router>
    )
}
  export default RouterApp;