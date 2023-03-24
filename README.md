<p align="center">
	<a href="https://rollupjs.org/"><img src="https://raw.githubusercontent.com/liubov-js/react-header-responsive/main/rhr-logo.png" width="150" /></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-header-responsive">
    <img src="https://img.shields.io/npm/v/react-header-responsive" alt="npm version" >
  </a>
  <a href="https://github.com/liubov-js/react-header-responsive/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/liubov-js/react-header-responsive" alt="license">
  </a>
</p>

# react-header-responsive

A responsive header menu for React applications with submenu support

### Features

- [x] Menu & Submenu
- [x] Desktop version
- [x] Mobile version
- [x] Tablet support
- [x] Current link highlighting
- [x] Custom anchor component support
- [x] Server-side rendering (SSR) support
- [x] Overlapping (display invisible header over content)

### Installation

```
npm install react-header-responsive
```

### Usage

| Property      | Description                                                                                                                                                                       |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `home`        | _Optional._ Logo component                                                                                                                                                        |
| `pages`       | _Optional._ An array of objects with `name` and `link`, or `name` and `children` properties. If children is specified it is an array of objects with `name` and `link` properties |
| `access`      | _Optional._ Access component for login, registration, etc.                                                                                                                        |
| `anchor`      | _Optional._ Function with an anchor component                                                                                                                                     |
| `overlap`     | _Optional._ Whether the header should overlap the content and be invisible                                                                                                        |
| `currentPath` | _Required for SSR only._ Used **only for server-side rendering (SSR)** instead of _window.location.pathname_                                                                      |

### Example

The use of react-header-responsive in a real project can be seen [here](https://cucomm.com/).

```js
import Header from 'react-header-responsive';
import logo from './rhr-logo.png';

function App() {
  const pages = [
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Products',
      children: [
        {
          name: 'Product-1',
          link: '/product1',
        },
        {
          name: 'Product-2',
          link: '/product2',
        },
        {
          name: 'Product-3',
          link: '/product3',
        },
      ],
    },
    {
      name: 'Pricing',
      link: '/pricing',
    },
  ];

  const Access = () => {
    return (
      <div>
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>
    );
  };

  return (
    <>
      <Header
        home={<img src={logo} alt="RHR logo" />}
        pages={pages}
        anchor={(link, name, className) => (
          <Link href={link} className={className}>
            {name}
          </Link>
        )}
        access={<Access />}
        overlap
      />
    </>
  );
}
```

### Contributing

1. Clone repo.
2. Create / checkout feature/{name}, or fix/{name} branch.
3. Install deps: npm.
4. Make your changes.
5. Commit: git commit.
6. Push: git push.
7. Open PR targeting the main branch.
