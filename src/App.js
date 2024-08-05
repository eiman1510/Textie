// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, { useState } from 'react';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// let name='eiman'
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [CurrCLr, setCurrClr] = useState('blue');
  const [btnClr, setbtnClr] = useState('primary');

  const showAlert = (msg1, type1) => {
    setAlert({
      msg: msg1,
      type: type1,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const setClr = (color) => {
    setCurrClr(color);

  }


  const toggleBtn = () => {
    if (mode === 'light') {
      setMode('dark');
      console.log(CurrCLr);
      if (CurrCLr === 'blue') {
        document.body.style.backgroundColor = '#1c2637';
        setbtnClr('primary');
      }
      else if (CurrCLr === 'green') {
        document.body.style.backgroundColor = '#1c432f';
        setbtnClr('success');
      }
      else if (CurrCLr === 'yellow') {
        document.body.style.backgroundColor = '#857d36';
        setbtnClr('warning');
      }
      else if (CurrCLr === 'red') {
        document.body.style.backgroundColor = '#410909';
        setbtnClr('danger');
      }
      else if (CurrCLr === 'grey') {
        document.body.style.backgroundColor = '#353232';
        setbtnClr('secondary');
      }
      document.body.style.color = 'white';
      showAlert("You are now in dark mood", "Success!!");
    }
    else {
      setMode('light');
      // setCurrClr('white');
      setbtnClr('primary');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("You are now in light mood", "Success!!!");
    }
  }


  return (
    <>
    {/* <Router>
      <Navbar title='Textie' state={mode} toggleBtn={toggleBtn} setClr={setClr} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/' element={<Textform heading='Enter and Analyze your text' state={mode} showAlert={showAlert} btnClr={btnClr} />}/>
        </Routes>
      </div>
      </Router> */}

      
      <Navbar title='Textie' state={mode} toggleBtn={toggleBtn} setClr={setClr} />
      <Alert alert={alert} />
      <div className="container my-3">
          <Textform heading='Enter and Analyze your text' state={mode} showAlert={showAlert} btnClr={btnClr} />
       
      </div>
    
    </>
  );
}

export default App;
