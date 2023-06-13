import React, { useEffect, useState } from 'react';

function Content2() {
  const [data, setData] = useState('Initial data...');

  useEffect(() => {
    setData('Data updated with useEffect...');
  }, []); // componentDidMount equivalent

  useEffect(() => {
    console.log('Content2 was updated'); // componentDidUpdate equivalent
  }, [data]);

  useEffect(() => {
    return () => {
      console.log('Content2 will unmount'); // componentWillUnmount equivalent
    };
  }, []); // componentWillUnmount equivalent

  return <div>{data}</div>;
}

export default Content2;
