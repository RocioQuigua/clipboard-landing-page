import React from 'react';

import imgAccess from '../../assets/img/image-devices.png'

export default function SectionAccess() {
  return (
    <div className='section-access'>
      <div className='container-tittle'>
        <h1>Access Clipboard Anywhere</h1>
        <p>Wheter you're on the go, or at your computer, you can access all
        your Clipboard snippets in a few simple clicks.</p>
      </div>
      <img className='img-access' src={imgAccess} alt="imgAccess" />
    </div>
  )
}