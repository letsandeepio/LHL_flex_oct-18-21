import React from 'react'

const RefuelAllButton = ({refuelAllRockets}) => {
  return (
    <section>
      <button onClick={refuelAllRockets}>Refuel All Rockets</button>
    </section>
  );
}

export default RefuelAllButton