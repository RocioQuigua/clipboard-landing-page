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
  let cards = [
    {
      img: imgCreate,
      title: 'Create blacklists',
      description: 'Ensure sensitive inforrmation never makes its way to your clipboard by exluding certain sources.',
    },
    {
      img: imgPlain,
      title: 'Plain text snippets',
      description: 'Remove unwanted formatting from copied text for a consistent look.',
    },
    {
      img: imgSneak,
      title: 'Sneak preview',
      description: 'Quick preview of all snippets on your Clipboard for easy access.',
    }
  ]
  return (
    <div className='section-supercharge'>
      <div className='container-tittle'>
        <h1>Supercharge your workflow</h1>
        <p>We've got the tools to boost your productivity.</p>
      </div>
      <div className='container-item'>
        {
          cards.map((card, index) =>
            <div className='card-item' key={index}>
              <img className='img' src={card.img} alt={card.title} />
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          )
        }
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