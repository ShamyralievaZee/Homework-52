import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
      <>
         <span className="card rank-k diams">
            <span className="rank">K</span>
            <span className="suit">♦</span>
        </span>
      </>
  );
};

export default App;
