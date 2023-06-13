import React, { useEffect, useState } from 'react';

function Footer() {
  const [data, setData] = useState('Initial data...');

  useEffect(() => {
    console.log('Footer was updated');
  }, [data]);

  const handleClick = () => {
    setData('Footer data updated...');
  };

  return (
    <div>
      <button onClick={handleClick}>Update Data</button>
      {data}
    </div>
  );
}

export default Footer;
