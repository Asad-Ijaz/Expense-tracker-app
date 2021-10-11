import React from 'react'
import './App.css'
import {useSelector} from 'react-redux'
//import Home from './components/home'
import RouterApp from './config/router'



function App() {
        const sto = useSelector(store=>store);
        console.log('data in store',sto);
  return (
 <div>   
        
      <RouterApp/>
      
          
 </div>
    );
}

export default App;
