import React, { useEffect, useState } from 'react';
import './App.css';
import { Calculator } from './components/Calculator';
import { MetamaskMessage } from './components/MetamaskMessage'

function App() {
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    checkMetamaskConnection();
  }, []);

  const checkMetamaskConnection = () => {
    if (typeof window.ethereum !== 'undefined') {
      setIsMetamaskConnected(true);
    } else {
      setIsModalOpen(true);
      setIsMetamaskConnected(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <body className="App">
      <Calculator isMetamaskConnected={isMetamaskConnected} /> 

      {isModalOpen && (
        <MetamaskMessage closeModal={closeModal} />
      )}
    </body>
  );
}

export default App;
