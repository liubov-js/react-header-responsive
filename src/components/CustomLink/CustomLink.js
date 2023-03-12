import React from 'react';

const CustomLink = ({ page, subClass, currentPath, anchor }) => {
  const path = currentPath || window.location.pathname;

  if (anchor) {
    return anchor(
      page.link,
      page.name,
      `${subClass} ${page.link === path ? 'rhr-active' : ''}`
    );
  }

  return (
    <a
      href={page.link}
      className={`${subClass} ${page.link === path ? 'rhr-active' : ''}`}
    >
      {page.name}
    </a>
  );
};

export default CustomLink;
