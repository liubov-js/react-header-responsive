import React, {useState} from "react";
import Main from "./components/Main";
import Home from "./components/Home";
import Access from "./components/Access";
import MobileMenuToggle from "./components/MobileMenuToggle";
import './styles.css';

export default (data, home, access) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(prevState => !prevState);
  }

  return (
    <header className="rhr-header">
      <div className="rhr-mobile-menu" onClick={toggleMenu}>
        <MobileMenuToggle isToggled={isToggled} />
      </div>
      <div className="rhr-home">
        <Home home={home} />
      </div>
      <div
        className={`rhr-menu-container ${!isToggled ? 'rhr-menu-container-mobile-transform' : ''}`}
      >
        <Main data={data} />
      </div>
      <div className="rhr-access-container">
        <Access component={access} />
      </div>
    </header>
  )
}
