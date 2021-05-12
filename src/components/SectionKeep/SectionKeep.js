import React from 'react'

import imgKeep from '../../assets/img/image-computer.png';

export default function SectionKeep() {
  return (
    <div className='section-keep'>
      <div className='container-tittle'>
        <h1>Keep track of your snippets</h1>
        <p>Clipboard instatly stores any you copy in the clous, meaning you can access
        your snippets immediately on all your devices. Our Mac and iOS apps will
          help you organize everything.</p>
      </div>
      <div className='content'>
        <img className='img-keep' src={imgKeep} alt="imgKeep" />
        <div className='container-item'>
          <div className='card-item'>
            <h2>Quick Search</h2>
            <p>Easily search your snippets by content,
          category, web address, application, and more.</p>
          </div>
          <div className='card-item'>
            <h2>iCloud Sync</h2>
            <p>Instanly saves and syncs strippets across all
            your devices.</p>
          </div>
          <div className='card-item'>
            <h2>Complete History</h2>
            <p>Retrieve any snippets from the first moment
            you started using the app.</p>
          </div>
        </div>
      </div>
    </div>
  )
}