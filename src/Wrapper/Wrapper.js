import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Content1 from '../components/Content1';
import Content2 from '../components/Content2';
import Footer from '../components/Footer';
import styles from './Wrapper.module.css';

function Wrapper() {
  const [toggle, setToggle] = useState({
    Navbar: false,
    Content1: false,
    Content2: false,
    Footer: false,
  });

  const handleClick = (component) => {
    setToggle((prevState) => ({ ...prevState, [component]: !prevState[component] }));
  };

  return (
    <div className={styles.container}>
      <button onClick={() => handleClick('Navbar')} className={styles.button}>
        Toggle Navbar
      </button>
      {toggle.Navbar && <Navbar />}

      <button onClick={() => handleClick('Content1')} className={styles.button}>
        Toggle Content1
      </button>
      {toggle.Content1 && <Content1 />}

      <button onClick={() => handleClick('Content2')} className={styles.button}>
        Toggle Content2
      </button>
      {toggle.Content2 && <Content2 />}

      <button onClick={() => handleClick('Footer')} className={styles.button}>
        Toggle Footer
      </button>
      {toggle.Footer && <Footer />}
    </div>
  );
}

export default Wrapper;
