import React from 'react';
import Rocket from './Rocket';

const RocketList = (props) => {
  const { listOfRockets, refuelRocket } = props;
  console.log({ listOfRockets });

  const parsedRockets = listOfRockets.map((rocket) => {
    return (
      <Rocket
        key={rocket.id}
        name={rocket.name}
        lastRefuelDate={rocket.lastRefuelDate}
        refuelInterval={rocket.refuelInterval}
        refuelRocket={() => refuelRocket(rocket.id)}
      />
    );
  });

  return <section>{parsedRockets}</section>;
};

export default RocketList;
