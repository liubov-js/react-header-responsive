import React from 'react';

const CustomLink = ({ page, subClass, currentPath, anchor }) => {
  const path = currentPath || window.location.pathname;

  if (anchor) {
    return anchor(
      page.link,
      page.name,
      `${subClass} ${
        page.link === path ? 'rhr-active-color' : 'rhr-common-color'
      }`
    );
  }

  return (
    <a
      href={page.link}
      className={`${subClass} ${
        page.link === path ? 'rhr-active-color' : 'rhr-common-color'
      }`}
    >
      {page.name}
    </a>
  );
};

export default CustomLink;
