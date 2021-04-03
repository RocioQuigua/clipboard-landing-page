import React from 'react';

import './Footer.css';
import logo from '../../assets/img/logo.svg'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='logo' />
      </div>
      <ul className='list-items'>
        <li>
          <a href="#faqs">FAQs</a>
        </li>
        <li>
          <a href="#contactus">Contact Us</a>
        </li>
        <li>
          <a href="#privacypolicy">Privacy Policy</a>
        </li>
        <li>
          <a href="#presskit">Press Kit</a>
        </li>
        <li>
          <a href="#installguide">Install Guide</a>
        </li>
      </ul>
      <div className='social-container'>
        <a href="#facebook">
          <i class="fab fa-facebook-square"/>
        </a>
        <a href="#twitter">
          <i class="fab fa-twitter"/>
        </a>
        <a href="#instagram">
          <i class="fab fa-instagram"/>
        </a>
      </div>
    </div>
  )
}
