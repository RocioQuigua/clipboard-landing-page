import React from 'react';

import './App.css';
import Footer from './components/Footer/Footer';
import SectionAccess from './components/SectionAccess/SectionAccess';
import SectionKeep from './components/SectionKeep/SectionKeep';
import SectionPresentation from './components/SectionPresentation/SectionPresentation';

export default function App() {
  return (
    <div>
      <SectionPresentation/>
      <SectionKeep/>
      <SectionAccess/>
      <Footer/>
    </div>
  )
}
