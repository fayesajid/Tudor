import Navbar from '../components/Navbar'
import './About.css'
import { Helmet } from 'react-helmet'
import React from 'react'
import HomeLogo from '../components/HomeLogo'

function About() {
  return (
    <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Tudor - About</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="description" content="Peer Tutoring Platform" />
    </Helmet>

      <HomeLogo>Logo</HomeLogo>
      <div className='about-header'>About</div>
      <Navbar></Navbar>
      
      <span>
        <h1 className='intro-blurb'>
        Introducing Tudor: A peer-to-peer tutoring system catering to student accessibility, mobility and convenience.
        </h1>
        <img src="./tudorbenefits.png" alt="Tudor Benefits"/>
        <img src="./ig.png" alt="Instagram Icon"/>
      </span>

    </div>
    
  )
}

export default About