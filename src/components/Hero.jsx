import React from 'react';

import PrimaryBtn from '../components/PrimaryBtn';

import RightArrowsSvg from '../components/icons/RightArrowsSvg';
import LineSvg from '../components/icons/LineSvg';
import WhiteCircleSvg from '../components/icons/WhiteCircleSvg';

const Hero = () => {
  return (
    <div className="relative flex h-[36rem] w-full items-center overflow-hidden bg-slate-400 bg-home-hero bg-cover bg-no-repeat max-md:bg-home-hero-mobile">
      <div className="mx-40 mt-20 flex w-1/3 flex-col gap-10 text-white  max-md:mx-4 max-md:w-full max-md:my-20">
        <h2 className="font-mono text-6xl font-semibold max-md:text-center max-md:text-5xl">
          Scooter sharing made simple
        </h2>
        <p className="pl-20 max-md:pl-0 max-md:text-center">
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you're away!
        </p>
        <PrimaryBtn
          title="Get Scootin"
          classBtn="w-1/3 max-md:w-1/2 max-md:mx-auto"
        />
      </div>
      <RightArrowsSvg className="absolute bottom-24 left-[45%] scale-90  max-md:-bottom-5 max-md:-left-72 max-md:scale-75" />
      <LineSvg className="absolute bottom-[14rem] left-0 scale-90 max-md:hidden" />

      <WhiteCircleSvg className="absolute bottom-28 -right-8 max-md:hidden" />
    </div>
  );
};

export default Hero;
