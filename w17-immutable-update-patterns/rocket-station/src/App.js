import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import RefuelAllButton from './components/RefuelAllButton';
import RocketList from './components/RocketList';
import { listOfRockets } from './data/rockets';

function App() {
  const [rockets, setRockets] = useState(listOfRockets);
  const [slots, setSlots] = useState(2);
  const arrayOfRockets = Object.values(rockets);

  const refuelRocket = (id) => {
    setRockets((prevState) => {
      const updatedRockets = { ...prevState };
      const updatedRocket = { ...updatedRockets[id] };

      updatedRocket.lastRefuelDate = new Date();
      updatedRockets[id] = updatedRocket;

      return updatedRockets
    });
  };

  const refuelAllRockets = () => {
    for (const key in rockets) {
      refuelRocket(key);
    }
  };

  const add1Slot = () => {
    setSlots(slots + 1);
  };

  const add5Slots = () => {
    console.log('rendering');
    setSlots((prev) => prev + 1); // 2+1
    setSlots((prev) => prev + 1); // 3+1
    setSlots((prev) => prev + 1); //....
    setSlots((prev) => prev + 1);
    setSlots((prev) => prev + 1);
  };

  return (
    <div className='App'>
      <Header />
      <h1>{slots}</h1>
      <button onClick={add1Slot}>add 1 slot</button>
      <button onClick={add5Slots}>add 5 slot</button>
      <RocketList listOfRockets={arrayOfRockets} refuelRocket={refuelRocket} />
      <RefuelAllButton refuelAllRockets={refuelAllRockets} />
    </div>
  );
}

export default App;
