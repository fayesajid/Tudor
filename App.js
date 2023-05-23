import { Helmet } from "react-helmet"
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
//import { Link } from "react-router-dom";
//import HomeLogo from "./components/HomeLogo";

//<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">


function App() {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Tudor - Home</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="description" content="Peer Tutoring Platform" />
    </Helmet>

    <img src="./Tudor Logo Transparent.png" width={100} height={100} alt="Tudor Logo of Pencil next to stack of books and Graduation Cap"/>

    <div className="title">
        <h1>Tudor - Supporting UofT Students With Tri-Campus Tutoring</h1>
    </div>
    
    <div>
      <Navbar>Navigation</Navbar>
    </div>

    <div className="tudor-blueback-image">
      <img src="./tudor logo.png" alt=""/>
    </div>

    <div className="welcome">
      Welcome to Tudor!
    </div>

    <div className="find-tutor-greeting">
      Find a Tutor Now!
    </div>

    </>
  );
}

export default App;
