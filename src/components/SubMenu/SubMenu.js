import React from "react";

export const SubMenu = ({pages}) => {
  return (
    <ul>
      {pages.map((ch, i) => {
        return (
          <li key={ch.id || i}>
            <a href={ch.link}>{ch.name}</a>
          </li>
        )
      })}
    </ul>
  );
}
