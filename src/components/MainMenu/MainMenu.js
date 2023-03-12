import React from 'react';
import SubMenu from '../SubMenu/SubMenu';
import CustomLink from '../CustomLink/CustomLink';
import './MainMenu.css';

const MainMenu = ({ pages, access, anchor, currentPath }) => {
  return (
    <nav>
      <ul className="rhr-menu-box">
        {pages.map((el, i) => {
          if (!el.children) {
            return (
              <li key={el.id || i}>
                <CustomLink page={el} {...{ anchor, currentPath }} />
              </li>
            );
          } else {
            return (
              <li key={el.id || i}>
                <span className="rhr-caret">
                  {el.name}
                  <i className="rhr-arrow" />
                </span>
                <SubMenu pages={el.children} {...{ anchor, currentPath }} />
              </li>
            );
          }
        })}
        <div className="rhr-main-access">{access}</div>
      </ul>
    </nav>
  );
};

export default MainMenu;
