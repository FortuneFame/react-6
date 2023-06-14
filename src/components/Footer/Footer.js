import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';

function Footer() {
  const [data, setData] = useState('Initial Footer data...');

  useEffect(() => {
    document.title = data;
  }, [data]);

  const handleClick = () => {
    setData(`Footer data updated at ${new Date().toLocaleTimeString()}`);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick} className={styles.button}>
        Update Data
      </button>
      {data}
    </div>
  );
}

export default Footer;
