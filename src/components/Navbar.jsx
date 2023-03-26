import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoSvg from '../components/icons/LogoSvg';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
  const [toggle, setToggle] = useState(true);
  return (
    <header className="flex items-center justify-between px-6 py-8">
      <Link to="/">
        <LogoSvg />
      </Link>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        className="mr-4 hidden text-black max-md:block"
      >
        {toggle ? <MenuIcon /> : <CloseIcon />}
      </button>
      <nav
        className={
          !toggle
            ? `navbar navbar-dark bg-dark container absolute top-20 left-0 z-10 flex w-full flex-col justify-center gap-14  bg-slate-800 py-7 text-center text-white`
            : `flex items-center gap-24 max-md:hidden`
        }
      >
        {navList.map((e) => (
          <Link
            key={e.name}
            to={e.path}
            className="font-semibold text-slate-400 hover:border-2 hover:border-dashed hover:border-amber-400 hover:px-2 hover:text-amber-400"
          >
            {e.name}
          </Link>
        ))}
        <PrimaryBtn title="Get Scootin" />
      </nav>
    </header>
  );
};

export default Navbar;
