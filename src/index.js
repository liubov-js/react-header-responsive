import React from "react";
import Main from "./components/Main";
import Home from "./components/Home";
import Access from "./components/Access";
import './styles.css';

export default (data, home, access) => {
  return (
    <header className="rhr-header">
      <div className="rhr-home">
        <Home home={home} />
      </div>
      <div className="rhr-menu-container">
        <Main data={data} />
      </div>
      <div className="rhr-access-container">
        <Access component={access} />
      </div>
    </header>
  )
}
