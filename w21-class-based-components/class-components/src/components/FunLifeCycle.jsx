import React, { useEffect, useState } from 'react'

const FunLifeCycle = () => {
  const [timer, setTimer] = useState(1);


  // componentDidUpdate
  useEffect(() => {
    console.log('Component did update');
  });

  // componentDidMount
  useEffect(() => {
    console.log('Component mount');
  }, []);

  useEffect(() => {

    console.log("timer useffect ran")

    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    // componentWillUmount
    // signal to us component is going to get destroyed
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>FunLifeCycle</div>
      <p>Timer: {timer}</p>
    </>
  );
}

export default FunLifeCycle