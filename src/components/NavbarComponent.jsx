import React from 'react'
import {

  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";

import  {Link} from "react-router-dom";

const NavbarComponent = () => {
    return (
      <div>
        <Navbar>
          <NavbarContainer className="mx-auto">
            <NavbarList>
              <NavbarItem>
                <Link to="/">Home</Link>
              </NavbarItem>
              <NavbarItem>
                <Link to="about">About</Link>
              </NavbarItem>
              <NavbarItem>
                <Link to="service">Service</Link>
              </NavbarItem>
            </NavbarList>
            <NavbarBrand>
              <img
                src="https://www.creativeitinstitute.com/images/logo/logo1718088965.png"
                alt="hasan"
              />
            </NavbarBrand>
            <NavbarList>
              <NavbarItem>
                <Link to="contact">Contact</Link>
              </NavbarItem>
              <NavbarItem>Documentation</NavbarItem>
              <NavbarItem>Blog</NavbarItem>
            </NavbarList>
            <NavbarCollapseBtn />
            <NavbarCollapse>
              <NavbarItem>Home</NavbarItem>
              <NavbarItem>About</NavbarItem>
              <NavbarItem>Service</NavbarItem>
              <NavbarItem>Contact</NavbarItem>
              <NavbarItem>Documentation</NavbarItem>
              <NavbarItem>Blog</NavbarItem>
            </NavbarCollapse>
          </NavbarContainer>
        </Navbar>
      </div>
    );
   

}

export default NavbarComponent