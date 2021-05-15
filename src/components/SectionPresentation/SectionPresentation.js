import React from 'react';

import logo from '../../assets/img/logo.svg';
import Button from '../Button/Button';

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
        <Button type='primary' name='Download for iOS'/>
        <Button type='secondary' name='Download for Mac'/>
      </div>
    </div>
  )
}