import React from 'react';

import OurTechImg from '../assets/images/our-tech.jpg';
import OurIntegrityImg from '../assets/images/our-integrity.jpg';
import OurCommunityImg from '../assets/images/our-community.jpg';

const dataOurValues = [
  {
    id: '01',
    imagen: OurTechImg,
    title: 'Our Tech',
    text: 'We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!',
  },
  {
    id: '02',
    imagen: OurIntegrityImg,
    title: 'Our integrity',
    text: 'We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.',
  },
  {
    id: '03',
    imagen: OurCommunityImg,
    title: 'Our community',
    text: 'We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.',
  },
];

const OurValues = ({title}) => {
  return (
    <section>
      <h2 className="text-center font-mono text-4xl font-semibold text-slate-700">
        {title}
      </h2>
      <div className="mx-auto grid w-3/4 grid-cols-3 max-md:grid-cols-1 gap-16">
        {dataOurValues.map((e) => (
          <div key={e.title} className="flex flex-col gap-8 text-center relative">
            <img
              src={e.imagen}
              alt={e.title}
              className="scale-75 rounded-full"
            />
            <div className="flex justify-center items-center h-24 w-24 rounded-full bg-amber-400 text-black absolute bottom-44 left-[7.5rem] max-md:left-[5.7rem]">
              <p className='font-semibold'>{e.id}</p>
            </div>
            <h4 className="text-mono text-2xl font-bold text-slate-700">
              {e.title}
            </h4>
            <p className="text-slate-600">{e.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
