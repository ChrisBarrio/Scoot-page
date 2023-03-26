import React from 'react';

import PageHero from '../components/PageHero';
import PrimaryBtn from '../components/PrimaryBtn';

import mapImg from '../assets/images/world-map-desktop.png';

const Location = () => {
  return (
    <section className="min-h-screen overflow-hidden">
      <PageHero title="Location" backgroundHero="bg-careers-hero" />
      <div className="relative">
        <img src={mapImg} alt="mapa mundial" className="mx-auto scale-75" />
      </div>
      <div className="mx-auto my-20 grid w-3/4 grid-cols-3">
        <h2 className="pr-20 font-mono text-5xl font-bold text-slate-700">
          Your city not listed?
        </h2>
        <p className=" text-slate-600">
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        <div className="flex items-center justify-center">
          <PrimaryBtn title="Message Us" />
        </div>
      </div>
    </section>
  );
};

export default Location;
