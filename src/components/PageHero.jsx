import React from 'react'

import WhiteCircleSvg from '../components/icons/WhiteCircleSvg';


const PageHero = ({title,backgroundHero}) => {
  return (
    <header className={`flex h-56 items-center justify-between ${backgroundHero} bg-no-repeat bg-cover bg-center`}>
        <h1 className="ml-40 font-mono text-6xl font-semibold text-white">
            {title}
        </h1>
        <WhiteCircleSvg className="scale-150" />
      </header>
  )
}

export default PageHero