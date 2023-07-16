import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom"



function App() {
  const [mode,setMode]=useState('light') //whether dark mode is enabled or not
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }
  const toggleMode=()=>{
    if(mode==='light'){
      document.body.style.backgroundColor = '#20305d';
      setMode('dark');
      showAlert("dark mode is enabled",'success');  
    }
    else{
    document.body.style.backgroundColor= "white";
    setMode('light');
    showAlert("light mode is enabled",'success')
    }
   
  };
  return (
   <>
  <Router>
   <Navbar title='Anmol' aboutText='about us' mode={mode} toggleMode={toggleMode}/>
{  /* <Navbar/>*/}
<Alert alert={alert}/>

<div className="container my-3">
<Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="This is my text to analyze" mode={mode}/>
            
         </Route>
  </Switch>

{/* <About/> */}
</div>
</Router>
   </>
  );
}

export default App;
