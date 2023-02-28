import React, {useState} from "react";
import {Main} from "./components/Main/Main";
import {Home} from "./components/Home/Home";
import {Access} from "./components/Access/Access";
import {MobileMenuToggle} from "./components/MobileMenuToggle/MobileMenuToggle";
import './styles.css';

const Header = ({data, home, access}) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(prevState => !prevState);
  }

  return (
    <header className="rhr-header">
      <div className="rhr-home">
        <Home home={home} />
      </div>
      <div
        className={`rhr-menu-container ${!isToggled ? 'rhr-menu-container-mobile-transform' : ''}`}
      >
        <Main data={data} access={<Access component={access} />} />
      </div>
      <div className="rhr-access-container">
        <Access component={access} />
      </div>
      <div className="rhr-mobile-menu" onClick={toggleMenu}>
        <MobileMenuToggle isToggled={isToggled} />
      </div>
    </header>
  )
}

export default Header;
