import logo from './logo.svg';
import './App.css';
import FunComponent from './components/FunComponent';
import ClassComponent from './components/ClassComponent';
import FunLifeCycle from './components/FunLifeCycle';
import ClassLifeCycle from './components/ClassLifeCycle';
import { useState } from 'react';


function App() {
 const [display, setDisplay] = useState(true);

  return (
    <div className='App'>
      <button onClick={() => setDisplay(!display)}>Toggle Button</button>
      {display ? <FunLifeCycle /> : <ClassLifeCycle />}
    </div>
  );
}

export default App;
