import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Content1 from '../components/Content1';
import Content2 from '../components/Content2';
import Footer from '../components/Footer';

function Wrapper() {
  const [component, setComponent] = useState(null);

  const handleSwitch = (comp) => {
    setComponent(comp);
  };

  return (
    <div>
      <button onClick={() => handleSwitch('Navbar')}>Navbar</button>
      <button onClick={() => handleSwitch('Content1')}>Content1</button>
      <button onClick={() => handleSwitch('Content2')}>Content2</button>
      <button onClick={() => handleSwitch('Footer')}>Footer</button>

      {component === 'Navbar' && <Navbar />}
      {component === 'Content1' && <Content1 />}
      {component === 'Content2' && <Content2 />}
      {component === 'Footer' && <Footer />}
    </div>
  );
}

export default Wrapper;
