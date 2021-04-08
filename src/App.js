import React from 'react';

import './App.css';
import SectionPresentation from './components/SectionPresentation/SectionPresentation';
import SectionKeep from './components/SectionKeep/SectionKeep';
import SectionAccess from './components/SectionAccess/SectionAccess';
import SectionSupercharge from './components/SectionSupercharge/SectionSupercharge';
import SectionClipboard from './components/SectionClipboard/SectionClipboard';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div>
      <SectionPresentation />
      <SectionKeep />
      <SectionAccess />
      <SectionSupercharge />
      <SectionClipboard />
      <Footer />
    </div>
  )
}
