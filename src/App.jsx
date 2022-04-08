import React from 'react';
import Announcements from './components/Announcements';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Here since the <Announcements /> and <Navbar /> components were getting rendered on every page so instead I have rendered 'em in the main "App.jsx".. 


function App(){

  return(

    <div>
      
      {/* The basename basically creates the default route address, and when users will try to navigate to different page. It will go thro that */}
      <Router basename="/">

        <div>
          <Announcements />
          <Navbar />
        </div>

        <Routes>

          {/* This is the Home page for the website.. */}
          <Route path="/" exact element={ <Home /> } />

          {/* This is the Register route for the website */}
          <Route path="/register" element={ <Register /> } />

          {/* This is the Login route for the website */}
          <Route path="/login" element={ <Login /> } />

        </Routes>
      </Router>

    </div>

  );
}

export default App;