import React from 'react';

const Rocket = (props) => {
  const { name, lastRefuelDate, refuelInterval, refuelRocket } = props;

  const isRocketWellFuelled = (lastRefuelDate, refuelInterval) => {
    const today = new Date();

    const diffInMs = today.getTime() - lastRefuelDate.getTime();

    // number of seconds in a day = 86400;
    const diffInDays = Math.floor(diffInMs / 1000 / 86400);

    return diffInDays < refuelInterval;
  };


  const rocketStyle = {
    margin: '15px',
    padding: '10px',
    border: '4px solid black',
    borderColor: isRocketWellFuelled(lastRefuelDate, refuelInterval) ? 'green' : 'red'
  };

  return (
    <article style={rocketStyle}>
      <h1>Rocket Name: {name}</h1>
      <p>Date of Last Refuel: {lastRefuelDate.toLocaleString()}</p>
      <button onClick={refuelRocket}>Refuel</button>
    </article>
  );
};

export default Rocket;
