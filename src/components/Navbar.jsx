import React from 'react';
import { Link } from 'react-router-dom';

import LogoSvg from '../components/icons/LogoSvg';

import PrimaryBtn from './PrimaryBtn';

const navList = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Location',
    path: '/location',
  },
  {
    name: 'Careers',
    path: '/careers',
  },
];

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-8">
      <Link to='/'>
        <LogoSvg />
      </Link>
      <nav className="flex gap-24">
        {navList.map((e) => (
          <Link
            key={e.name}
            to={e.path}
            className="font-semibold text-slate-400 hover:border-2 hover:border-dashed hover:border-amber-400 hover:px-2 hover:text-amber-400"
          >
            {e.name}
          </Link>
        ))}
      </nav>
      <PrimaryBtn title="Get Scootin" />
    </header>
  );
};

export default Navbar;
