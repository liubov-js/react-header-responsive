import React, { useState } from 'react';
import MainMenu from './components/MainMenu/MainMenu';
import Home from './components/Home/Home';
import Access from './components/Access/Access';
import MobileMenuToggle from './components/MobileMenuToggle/MobileMenuToggle';
import './styles.css';

const Header = ({ pages, anchor, home, access, currentPath, overlap }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <header className={`rhr-header ${overlap ? 'rhr-overlap' : ''}`}>
      <div className="rhr-home">
        <Home home={home} />
      </div>
      <div
        className={`rhr-menu-container ${
          !isToggled ? 'rhr-menu-container-mobile-transform' : ''
        }`}
      >
        <MainMenu {...{ pages, anchor, access, currentPath }} />
      </div>
      <div className="rhr-access-container">
        <Access access={access} />
      </div>
      <div className="rhr-mobile-menu" onClick={toggleMenu}>
        <MobileMenuToggle isToggled={isToggled} />
      </div>
    </header>
  );
};

export default Header;
