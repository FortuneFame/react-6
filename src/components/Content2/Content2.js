import React, { useEffect, useState } from 'react';
import styles from './Content2.module.css';

function Content2() {
  const [data, setData] = useState('Initial Content2 data...');

  // componentDidMount equivalent
  useEffect(() => {
    setData('Content2 data updated after mounting...');
  }, []);

  // componentDidUpdate equivalent
  useEffect(() => {
    if (data.includes('updated')) {
      setData(`Content2 has been updated at ${new Date().toLocaleTimeString()}`);
    }
  }, [data]);

  // componentWillUnmount equivalent
  useEffect(() => {
    return () => {
      console.log('Content2 will unmount');
    };
  }, []);

  return <div className={styles.container}>{data}</div>;
}

export default Content2;
