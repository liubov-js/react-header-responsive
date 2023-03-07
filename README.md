# react-header-responsive

### Installing
```
npm install react-header-responsive
```

### Usage
```ecmascript 6
import Header from 'react-header-responsive';
import logo from './rhr-logo.png';

function App() {
  const exampleData = [
    {
      name: "About company",
      link: "/about",
    },
    {
      name: "Products",
      children: [
        {
          name: "CUCOMM Extension",
          link: "/extension",
        },
        {
          name: "Appointment setting service",
          link: "/appointment",
        },
        {
          name: "Facebook accounts",
          link: "/fb-accounts",
        }
      ]
    },
    {
      name: "Contact us",
      link: "/contact",
    },
  ]

  const AccessComponent = () => {
    return (
      <div style={{paddingTop: '20px'}}>
        <button>Login</button>
        <button>Buy</button>
      </div>
    )
  }

  return (
    <div>
      <Header 
        pages={exampleData} 
        access={<AccessComponent />} 
        home={<img src={logo} className="App-logo" alt="logo" />} 
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
