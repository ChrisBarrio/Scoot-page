import React from 'react';
import { Helmet } from 'react-helmet-async';

import Hero from '../components/Hero';
import StepsShipping from '../components/StepsShipping';
import LeftArrowSection from '../components/LeftArrowSection';
import RightArrowSection from '../components/RightArrowSection';

import Telemetry from '../assets/images/telemetry.jpg';
import City from '../assets/images/near-you.jpg';
import Payments from '../assets/images/payments.jpg';

import backgroundHero from '../assets/images/home-hero-desktop.jpg';

const dataTelemetry = {
  image: Telemetry,
  title: 'Easy to use riding telemetry',
  text: 'The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you`ve been using the scooter, your traveling distance, and many more things all in an easy to use app.',
};

const dataComing = {
  image: City,
  title: 'Coming to a city near you',
  text: 'Scoot is available in 4 major cities so far. We`re expanding rapidly, so be sure to let us know if you want to see us in your hometown.We`re aiming to let our scooters loose on 23 cities over the coming year.',
};

const dataZero = {
  image: Payments,
  title: 'Zero hassle payments',
  text: 'Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.',
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Scoot || Home</title>
        <meta name='description' content='descrion de la empresa / producto' />

      </Helmet>
      <section className="min-h-screen">
        <Hero backgroundHero={backgroundHero} />
        <StepsShipping />
        <RightArrowSection dataText={dataTelemetry} />
        <LeftArrowSection dataText={dataComing} />
        <RightArrowSection dataText={dataZero} />
      </section>
    </>
  );
};

export default Home;
