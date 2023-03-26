import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

import LogoSvg from '../components/icons/LogoSvg';
import SingupHero from '../components/SingupHero';
import TwitterSvg from '../components/icons/TwitterSvg';
import FacebookSvg from '../components/icons/FacebookSvg';
import InstagramSvg from '../components/icons/InstagranSvg';

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

const LayoutPublic = () => {
  return (
    <div>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <SingupHero />
      <footer className=" flex gap-10 py-10 items-center justify-around bg-slate-800 px-8 max-md:flex-col">
        <Link to="/">
          <LogoSvg />
        </Link>
        <nav className="flex gap-10 max-md:flex max-md:flex-col">
          {navList.map((e) => (
            <Link
              key={e.name}
              to={e.path}
              className="font-semibold text-slate-400"
            >
              {e.name}
            </Link>
          ))}
        </nav>
        <div className="flex gap-8">
          <a href="#facebook">
            <FacebookSvg />
          </a>
          <a href="#twitter">
            <TwitterSvg />
          </a>
          <a href="#instagram">
            <InstagramSvg />
          </a>
        </div>
      </footer>
    </div>
  );
};
export default LayoutPublic;
