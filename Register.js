import React from 'react'
import './Register.css';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet';
import HomeLogo from '../components/HomeLogo';

function Register() {
  return (
    <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Tudor - Register</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="description" content="Peer Tutoring Platform" />
    </Helmet>

    <HomeLogo>
      Logo
    </HomeLogo>
      <div className='register-header'>Register</div>
      <Navbar></Navbar>

    </div>
    
  )
}

export default Register