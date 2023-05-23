import React from 'react'
import Navbar from '../components/Navbar'
import './Contact.css';
import { Helmet } from 'react-helmet';
import HomeLogo from '../components/HomeLogo';

function Contact() {
  return (
    <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Tudor - Contact</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="description" content="Peer Tutoring Platform" />
    </Helmet>

      <HomeLogo>Logo</HomeLogo>
      <div className='contact-header'>Contact Us</div>
      <Navbar></Navbar>
      
    <h1 className='contact-blurb'>
      Any Questions or Concerns? Contact Us at:
    </h1>
    <img src="./ig.png" height={50} width={50} alt="Instagram Icon"/>
    <img src="./email.png" height={50} width={50} alt="Email Icon"/>



    </div>
  )
}

export default Contact