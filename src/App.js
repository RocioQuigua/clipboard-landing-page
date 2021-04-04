import React from 'react';

import './App.css';
import Footer from './components/Footer/Footer';
import SectionAccess from './components/SectionAccess/SectionAccess';
import SectionKeep from './components/SectionKeep/SectionKeep';

export default function App() {
  return (
    <div>
      <SectionKeep/>
      <SectionAccess/>
      <Footer/>
    </div>
  )
}
