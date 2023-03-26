import React from 'react';

import LocateSvg from '../components/icons/LocateSvg';
import RiderSvg from '../components/icons/RiderSvg';
import ScooterSvg from '../components/icons/ScooterSvg';


const dataSteps = [
  {
    icon: <LocateSvg />,
    title: 'Locate with app',
    text: 'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.',
  },
  {
    icon: <RiderSvg />,
    title: 'Pick your scooter',
    text: 'We show the most important info for the scooters closest to you.So you know how much charge they have left and can see roughly how much it will cost.',
  },
  {
    icon: <ScooterSvg />,
    title: 'Enjoy the ride',
    text: 'Scan the QR code and the bike will unlock.Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.',
  },
];

const StepsShipping = () => {
  return (
    <>
      <div className="mx-auto my-20 grid w-3/4 grid-cols-3 gap-8">
        {dataSteps.map((e) => (
          <div key={e.title} className="flex flex-col gap-8">
            {e.icon}
            <h3 className="mt-16 text-2xl font-semibold text-slate-700 font-mono">
              {e.title}
            </h3>
            <p className="text-slate-600">{e.text}</p>
          </div>
        ))}
      </div>
      <div className="absolute h-4 w-2/3 -bottom-24 -z-10  bg-sky-100"></div>
    </>
  );
};

export default StepsShipping;
