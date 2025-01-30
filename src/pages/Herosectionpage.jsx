import React from 'react'
import Herosection from '../components/herosection/Herosection'
import MainSection from '../components/herosection/MainSection'
import TripleSection from '../components/herosection/TripleSection';
import OverlLine2 from '../components/herosection/OverlLine2';
import OverLine from '../components/herosection/OverLine';
import PopularAution from '../components/herosection/PopularAution';
import CustomersFeedback from '../components/herosection/CustomersFeedback';

function Herosectionpage() {
  return (
    <div>
      <Herosection />
      <MainSection />
      <MainSection />
      <OverLine />
      <TripleSection />
      <OverlLine2 />
      <PopularAution />
      <CustomersFeedback />
    </div>
  );
}

export default Herosectionpage
