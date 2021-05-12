import React from 'react';

import logo from '../../assets/img/logo.svg'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='logo' />
      </div>
      <ul className='footer__list-items'>
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
          <i className="fab fa-facebook-square"/>
        </a>
        <a href="#twitter">
          <i className="fab fa-twitter"/>
        </a>
        <a href="#instagram">
          <i className="fab fa-instagram"/>
        </a>
      </div>
    </div>
  )
}