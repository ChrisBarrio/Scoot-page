import React from 'react';
import { Helmet } from 'react-helmet-async';

import LeftArrowSection from '../components/LeftArrowSection';
import RightArrowSection from '../components/RightArrowSection';
import OurValues from '../components/OurValues';
import Faqs from '../components/Faqs';
import PageHero from '../components/PageHero';

import DigitalEra from '../assets/images/digital-era.jpg';
import BetterLiving from '../assets/images/better-living.jpg';

import bgheropage from '../assets/images/about-hero-desktop.jpg';

const dataMobility = {
  image: DigitalEra,
  title: 'Mobility for the digital era',
  text: ' Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.',
};
const dataBetter = {
  image: BetterLiving,
  title: 'Better urban living',
  text: 'We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.',
};

const About = () => {
  return (
    <>
      <Helmet>
        <title>Scoot || About</title>
        <meta
          name="description"
          content="pagina de informacion de la empresa / producto"
        />
      </Helmet>
      <section className="min-h-screen overflow-hidden">
        <PageHero title="About" backgroundHero={bgheropage} />
        <RightArrowSection dataText={dataMobility} />
        <LeftArrowSection dataText={dataBetter} />
        <OurValues title="Our values" />
        <Faqs />
      </section>
    </>
  );
};

export default About;
