import React from "react";

export const SubMenu = ({pages}) => {
  const path = window.location.pathname;

  return (
    <ul>
      {pages.map((ch, i) => {
        return (
          <li key={ch.id || i}>
            <a href={ch.link} className={`${ch.link === path ? 'rhr-active' : ''}`}>
              {ch.name}
            </a>
          </li>
        )
      })}
    </ul>
  );
}
