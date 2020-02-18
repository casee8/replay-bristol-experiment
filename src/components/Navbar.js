import React from 'react';
import { Link } from 'react-router-dom';
import transparent_main_logo from '../media/img/transparent_main_logo.png';

const Navbar = () => {
  return (
    <nav className='navbar bg-light'>
      <Link to='/'>
        <img src={transparent_main_logo} style={{ width: '150px' }} alt='' />
      </Link>
      <ul>
        <li className='text-primary'>
          <Link to='/privatehire'>Private Hire & Basement</Link>
        </li>
        <li>
          <Link to='/games' className='text-primary'>
            Games
          </Link>
        </li>
        <li>
          <Link to='/menu' className='text-primary'>
            Menu
          </Link>
        </li>
        <li>
          <Link to='/after-school-club' className='text-primary'>
            After School Club
          </Link>
        </li>
        <li>
          <Link to='/kidsparty' className='text-primary'>
            Kid's Party
          </Link>
        </li>
        <li>
          <Link to='contact' className='text-primary'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
