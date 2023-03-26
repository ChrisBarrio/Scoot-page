import React from 'react';

import WhiteCircleSvg from '../components/icons/WhiteCircleSvg';

import GooglePlayBtn from './icons/GooglePlayBtn';
import AppleStoreBtn from './icons/AppleStoreBtn';

const SingupHero = () => {
  return (
    <section className="relative grid h-[20rem] grid-cols-2 items-center gap-8 bg-slate-700 py-20 overflow-hidden">
      <div>
        <h3 className="mx-auto w-[25rem] font-mono text-5xl font-semibold text-white">
          Sign up and Scoot off today
        </h3>
      </div>
      <div className="mx-auto  flex gap-8 z-10">
        <a href="#googleplay">
          <GooglePlayBtn />
        </a>
        <a href="#applestore">
          <AppleStoreBtn />
        </a>
      </div>
      <WhiteCircleSvg className="absolute left-1/2 bottom-0 scale-[500%] opacity-5 " />
    </section>
  );
};

export default SingupHero;
