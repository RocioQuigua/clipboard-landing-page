import React from 'react';

import imgCreate from '../../assets/img/icon-blacklist.svg'
import imgPlain from '../../assets/img/icon-text.svg'
import imgSneak from '../../assets/img/icon-preview.svg'
import imgGoogle from '../../assets/img/logo-google.png';
import imgIbm from '../../assets/img/logo-ibm.png';
import imgMicrosoft from '../../assets/img/logo-microsoft.png';
import imgHp from '../../assets/img/logo-hp.png';
import imgVector from '../../assets/img/logo-vector-graphics.png';

export default function SectionSupercharge() {
  return (
    <div className='section-supercharge'>
      <div className='container-tittle'>
        <h1>Supercharge your workflow</h1>
        <p>We've got the tools to boost your productivity.</p>
      </div>
      <div className='container-item'>
        <div className='card-item'>
          <img className='img' src={imgCreate} alt="imgCreate" />
          <h2>Create blacklists</h2>
          <p>Ensure sensitive inforrmation never makes its way 
            to your clipboard by exluding certain sources.</p>
        </div>
        <div className='card-item'>
          <img className='img' src={imgPlain} alt="imgPlain" />
          <h2>Plain text snippets</h2>
          <p>Remove unwanted formatting from copied text for
          a consistent look.</p>
        </div>
        <div className='card-item'>
          <img className='img' src={imgSneak} alt="imgSneak" />
          <h2>Sneak preview</h2>
          <p>Quick preview of all snippets on your Clipboard
          for easy access.</p>
        </div>
      </div>
      <div className='container-img'>
        <img className='img' src={imgGoogle} alt="imgGoogle" />
        <img className='img' src={imgIbm} alt="imgIbm" />
        <img className='img' src={imgMicrosoft} alt="imgMicrosoft" />
        <img className='img' src={imgHp} alt="imgHp" />
        <img className='img' src={imgVector} alt="imgVector" />
      </div>
    </div>
  )
}