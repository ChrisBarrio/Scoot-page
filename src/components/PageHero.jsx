import React from 'react';

import WhiteCircleSvg from '../components/icons/WhiteCircleSvg';

const PageHero = ({ title, backgroundHero }) => {
  return (
    <header className="relative flex h-56 items-center justify-between bg-cover bg-center bg-no-repeat">
      <img
        src={backgroundHero}
        alt="imagen hero de la página"
        className="absolute h-full w-full object-cover"
      />
      <h1 className="ml-40 font-mono text-6xl font-semibold text-white max-md:mx-auto">
        {title}
      </h1>
      <WhiteCircleSvg className="scale-150 max-md:hidden" />
    </header>
  );
};

export default PageHero;
