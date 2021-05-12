import React from 'react';

import logo from '../../assets/img/logo.svg';

export default function SectionPresentation() {
  return (
    <div className='section-presentation'>
      <div className='container-logo'>
        <img className='logo' src={logo} alt='logo' />
      </div>
      <div className='container-tittle'>
        <h1>A history of everything you copy</h1>
        <p>Clipboard allows you to track and organize everything you
          copy. Instanly access your clipboard all your devices.</p>
      </div>
      <div className='container-button'>
        <button className='button button--primary'>Download for iOS</button>
        <button className='button button--second'>Download for Mac</button>
      </div>
    </div>
  )
}