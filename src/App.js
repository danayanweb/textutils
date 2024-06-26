import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');
  const [name, setName] = useState('Enable Dark Mode');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setName('Enable Light Mode');
      document.body.style.backgroundColor = "#0c2841";
      showAlert("Dark mode has enabled", "success");
      document.title = "TextUtils Dark Mode";
    }
    else {
      setMode('light');
      setName("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled", "warning")
      document.title = "TextUtils Light Mode";

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} name={name} />
        <Alert alert={alert} />

        <Routes>

          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to  analyze below" mode={mode} />} />

          <Route path="/about" element={<About />} />


        </Routes>

      </Router>

    </>

  );
}

export default App;
