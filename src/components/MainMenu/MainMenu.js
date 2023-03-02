import React from "react";
import {SubMenu} from "../SubMenu/SubMenu";
import './MainMenu.css';

export const MainMenu = ({pages, access}) => {
  const path = window.location.pathname;

  return (
    <nav>
      <ul className='rhr-menu-box'>
        {pages.map((el, i) => {
          if (!el.children) {
            return (
              <li key={el.id || i}>
                <a href={el.link} className={`${el.link === path ? 'rhr-active' : ''}`}>
                  {el.name}
                </a>
              </li>
            );
          } else {
            return (
              <li key={el.id || i}>
                <span className='rhr-caret'>
                  {el.name}
                  <i className="rhr-arrow"/>
                </span>
                <SubMenu pages={el.children}/>
              </li>
            );
          }
        })}
        <div className="rhr-main-access">{access}</div>
      </ul>
    </nav>
  );
}
