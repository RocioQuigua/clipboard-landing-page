import React from 'react';

export default function SectionClipboard() {
  return (
    <div className='section-clipboard'>
      <div className='container-tittle'>
        <h1>Clipboard for iOS and Mac OS</h1>
        <p>Available for free on the App Store. Download for Mac or iOS,
        sync with ¡Cloud and you're ready to start adding to your clipboard.</p>
      </div>
      <div className='container-button'>
      <button className='button button--primary'>Download for iOS</button>
      <button className='button button--second'>Download for Mac</button>
      </div>
    </div>
  )
}