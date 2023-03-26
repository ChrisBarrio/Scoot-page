import React from 'react';

import PrimaryBtn from './PrimaryBtn';

import LeftUpwardArrow from './icons/LeftUpwardArrow';

import City from '../assets/images/near-you.jpg';

const LeftArrowSection = ({ dataText }) => {
  return (
    <section className="mx-auto my-20 grid w-3/4 grid-cols-2 overflow-hidden">
      <div className="relative">
        <img
          className="mr-auto rounded-full"
          src={dataText.image}
          alt="riding through the busy cities made easy with scoot
        "
        />
        <LeftUpwardArrow className="absolute -left-40 top-10 scale-75" />
      </div>
      <div className="my-auto flex flex-col gap-8 pr-12">
        <h3 className="font-mono text-5xl font-semibold text-slate-700">
          {dataText.title}
        </h3>
        <p className="text-slate-600">{dataText.text}</p>
        <PrimaryBtn title="Learn more" classBtn="w-1/3 py-4 text-white" />
      </div>
    </section>
  );
};

export default LeftArrowSection;
