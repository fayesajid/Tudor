import React from 'react';
import { Link } from 'react-router-dom';
import './HomeLogo.css';

function HomeLogo() {
  return (
    <logo style={{ color: 'blue', lineHeight : 10, padding: 20 }}>
      <Link to="/">
        <img src="./Tudor Logo Transparent.png" width={100} height={100} alt="Tudor Logo of Pencil next to stack of books and Graduation Cap"/>
      </Link>
    </logo>
  )
}

export default HomeLogo