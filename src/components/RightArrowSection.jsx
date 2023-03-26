import React from 'react';

import PrimaryBtn from './PrimaryBtn';

import LeftDownwardArrow from './icons/LeftDownwardArrow';

const LeftArrowSection = ({ dataText, arrowUbication }) => {
  return (
    <section className="mx-auto my-20 grid w-3/4 grid-cols-2 max-md:flex max-md:flex-col-reverse overflow-hidden">
      <div className="my-auto flex flex-col gap-8 pr-12 max-md:pr-0 max-md:my-4">
        <h3 className="font-mono text-5xl font-semibold text-slate-700 max-md:text-3xl max-md:text-center">
          {dataText.title}
        </h3>
        <p className="text-slate-600 max-md:text-center">{dataText.text}</p>
        <PrimaryBtn title="Learn more" classBtn="w-1/3 py-4 text-white max-md:w-full" />
      </div>
      <div className="relative">
        <img
          className="mr-auto rounded-full"
          src={dataText.image}
          alt="riding through the busy cities made easy with scoot
        "
        />
        <LeftDownwardArrow className={`absolute -left-40 top-10 scale-75 ${arrowUbication} max-md:scale-50 max-md:top-40`} />
      </div>
    </section>
  );
};

export default LeftArrowSection;
