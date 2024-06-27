import React from 'react'
import NavbarComponent from './NavbarComponent'

import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <NavbarComponent />
      <Outlet/> 
    <footer className='text-center absolute bottom-0 font-[20px] bg-black text-white '>copyright-by@hasan</footer>
    </div>
  );
}

export default Root