import React from 'react';
import { Helmet } from 'react-helmet-async';


import PageHero from '../components/PageHero';
import PrimaryBtn from '../components/PrimaryBtn';

import mapImg from '../assets/images/world-map-desktop.png';

const Locations = ['New York', 'London', 'Yokohama', 'Jakarta'];

import bgheropage from '../assets/images/careers-locations-hero-desktop.jpg';

const Location = () => {
  return (
    <>
      <Helmet>
        <title>Scoot || Location</title>
        <meta name='description' content='ubicacion de la empresa / producto' />

      </Helmet>
      <section className=" min-h-screen overflow-hidden">
        <PageHero title="Location" backgroundHero={bgheropage} />
        <div className="relative">
          <img
            src={mapImg}
            alt="mapa mundial"
            className="mx-auto scale-75 max-md:my-10 max-md:scale-95"
          />
        </div>
        <ul className="hidden w-full max-md:block">
          {Locations.map((e) => (
            <li
              key={e}
              className="mx-auto my-4 flex h-20 w-3/4 items-center bg-red-100"
            >
              <p className=" mx-auto   text-center font-bold">{e}</p>
            </li>
          ))}
        </ul>
        <div className="mx-auto my-20 grid w-3/4 grid-cols-3 max-md:grid-cols-1 max-md:gap-8">
          <h2 className="pr-20 font-mono text-5xl font-bold text-slate-700 max-md:pr-0 max-md:text-center max-md:text-4xl">
            Your city not listed?
          </h2>
          <p className=" text-slate-600 max-md:text-center">
            If you’d like to see Scoot in your hometown, be sure to let us know.
            We track requests and plan launches based on demand. Feel free to
            message us by clicking the link or messaging us on social.
          </p>
          <div className="flex items-center justify-center">
            <PrimaryBtn title="Message Us" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
