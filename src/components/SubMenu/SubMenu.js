import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const SubMenu = ({ pages, anchor, currentPath }) => {
  return (
    <ul>
      {pages.map((ch, i) => {
        return (
          <li key={ch.id || i}>
            <CustomLink
              page={ch}
              {...{ anchor, currentPath }}
              subClass="rhr-sub-menu-link"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default SubMenu;
