import React from "react";

export default (props) => {
  const handleMenuItemClick = (el) => {
    console.log('element', el)
  }

  return (
    <nav>
      <ul className='rhr-menu-box'>
        {props.data.data.map((el, i) => {
          if (!el.children) {
            return (
              <li className="rhr-main-menu" key={el.id || i} onClick={() => handleMenuItemClick(el)}>
                <a className="rhr-menu-item" href={el.link}>{el.name}</a>
              </li>
            )
          } else {
            return (
              <li>
                <span className='rhr-caret'>
                  {el.name}
                  <i className="rhr-arrow"/>
                </span>

                <ul>
                  {el.children.map((ch, i) => {
                    return (
                      <li className="rhr-li-child" key={ch.id || i} onClick={() => handleMenuItemClick(ch)}>
                        <a className="rhr-menu-item" href={ch.link}>{ch.name}</a>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          }
        })}
      </ul>
    </nav>
  );
}
