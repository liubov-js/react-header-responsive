import React from "react";
import './Main.css';

export const Main = ({pages, access}) => {
  const handleMenuItemClick = (el) => {
    console.log('element', el);
  }

  return (
    <nav>
      <ul className='rhr-menu-box'>
        {pages.map((el, i) => {
          if (!el.children) {
            return (
              <li key={el.id || i} onClick={() => handleMenuItemClick(el)}>
                <a href={el.link}>{el.name}</a>
              </li>
            );
          } else {
            return (
              <li key={el.id || i}>
                <span className='rhr-caret'>
                  {el.name}
                  <i className="rhr-arrow"/>
                </span>
                <ul>
                  {el.children.map((ch, i) => {
                    return (
                      <li key={ch.id || i} onClick={() => handleMenuItemClick(ch)}>
                        <a href={ch.link}>{ch.name}</a>
                      </li>
                    )
                  })}
                </ul>
              </li>
            );
          }
        })}
        <div className="rhr-main-access">{access}</div>
      </ul>
    </nav>
  );
}
