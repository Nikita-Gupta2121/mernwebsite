import React from 'react';
import { Carousels } from './Carousels';
import { Section1 } from './Section1';
import { Footer } from './Footer';
import { Cards } from './cards';
import { Section2 } from './Section2';


export function Home() {
  return (
    <>
      
      <Section1 />
      <Section2 />
      <Carousels />
      <Cards />
      <Footer />
    </>
  );
}
