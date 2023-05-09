import About from './Components/About';
// import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  
  return (
    <div className="App" > 
      <Router>
        <Navbar title='TextUtils'/>
        <div className='container my-3'>
          <Routes>
            <Route path="/about" element={<About heading='About Us'/>} />
            <Route path="/" element={<TextForm heading="Enter the text here to Analyze here"/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
/* <TextForm heading="Enter the text here to Analyze"/> */
export default App;
