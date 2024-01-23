// App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Navigation from './Navigation';

const App = () => {
  return (
    <>
    <Router>
      <Navigation/>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;
