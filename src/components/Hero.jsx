import React from 'react';

import PrimaryBtn from '../components/PrimaryBtn';

import RightArrowsSvg from '../components/icons/RightArrowsSvg';
import LineSvg from '../components/icons/LineSvg';
import WhiteCircleSvg from '../components/icons/WhiteCircleSvg';

const Hero = () => {
  return (
    <div className="relative flex h-[36rem] w-full items-center overflow-hidden bg-slate-400 bg-home-hero bg-cover bg-no-repeat">
      <div className="mx-40 mt-20 flex w-1/3 flex-col  gap-10 text-white">
        <h2 className="text-6xl font-semibold font-mono">
          Scooter sharing made simple
        </h2>
        <p className="pl-20">
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you're away!
        </p>
        <PrimaryBtn title="Get Scootin" classBtn="w-1/3" />
      </div>
      <RightArrowsSvg className="absolute bottom-24 left-[45%] scale-90" />
      <LineSvg className="absolute bottom-[14rem] left-0 scale-90" />

      <WhiteCircleSvg className="absolute bottom-28 -right-8" />
    </div>
  );
};

export default Hero;
