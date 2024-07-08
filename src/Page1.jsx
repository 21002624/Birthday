import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Page1() {
  const navigate = useNavigate();

  const navigateToNextPage = () => {
    navigate('/page2');
  };

  return (
    <div className='container'>
      <h1>Caution!!!</h1>
      <p>Bruh dont show thist o your bf</p>
      <button onClick={navigateToNextPage}>Next</button>
    </div>
  );
}

export default Page1;
