import React, { useState } from 'react';
import './Container.scss';

const Container = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="container">
      <div className="close close-watched" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '-' : '+'}
      </div>
      {isOpen && children}
    </div>
  );
};

export default Container;
