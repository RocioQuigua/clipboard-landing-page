import React from 'react'

import imgKeep from '../../assets/img/image-computer.png';

export default function SectionKeep() {
  let cards = [
    {
      title: 'Quick Search',
      description: 'Easily search your snippets by content, category, web address, application, and more.',
    },
    {
      title: 'iCloud Sync',
      description: 'Instanly saves and syncs strippets across all your devices.',
    },
    {
      title: 'Complete History',
      description: 'Retrieve any snippets from the first moment you started using the app.',
    }
  ];
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
          {
            cards.map((card, index) =>
              <div className='card-item' key={index}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}