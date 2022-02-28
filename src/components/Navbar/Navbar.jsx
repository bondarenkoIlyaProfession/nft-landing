import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../../assets/logo.png";

export const Navbar = ({ changeTheme, currentTheme }) => {
  const [navState, setNavState] = useState(false);

  return (
    <nav className="nav">
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="toggle-container">
          <div className="toggle">
            {navState ? <MdClose onClick={() => setNavState(false)} /> : <GiHamburgerMenu onClick={() => setNavState(true)} />}
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? <ImSun className="light" /> : <BsFillMoonFill className="dark" />}
          </div>
        </div>
      </div>

      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li className="links-item"><a href="#top" className="links-link">Features</a></li>
          <li className="links-item"><a href="#top" className="links-link">About</a></li>
          <li className="links-item"><a href="#top" className="links-link">Launch</a></li>
          <li className="links-item"><a href="#top" className="links-link">Sing Up</a></li>
          <li className="links-item theme-switcher" onClick={changeTheme}>
            {currentTheme === "dark" ? <ImSun className="light" /> : <BsFillMoonFill className="dark" />}
          </li>
        </ul>
      </div>
    </nav>
  )
}