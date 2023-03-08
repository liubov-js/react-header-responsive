# react-header-responsive
A responsive header React component

### Features
- [x] Desktop version
- [x] Mobile version
- [x] Overlap props
- [x] Active link highlight
- [ ] Custom anchor component support

### Installation
```
npm install react-header-responsive
```

### Usage
```js
import Header from 'react-header-responsive';
import logo from './rhr-logo.png';

function App() {
  const exampleData = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Products",
      children: [
        {
          name: "Product-1",
          link: "/product1",
        },
        {
          name: "Product-2",
          link: "/product1",
        },
        {
          name: "Product-3",
          link: "/product1",
        }
      ]
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
  ]

  const AccessComponent = () => {
    return (
      <div style={{paddingTop: '20px'}}>
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>
    )
  }

  return (
    <div>
      <Header 
        pages={exampleData} 
        access={<AccessComponent />} 
        home={<img src={logo} alt="RHR logo" />} 
        overlap
      />
    </div>
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
