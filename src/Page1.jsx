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
      <div className='innerDiv'>
      <p>Bruh dont show thist o your bf</p>
      </div>
      <button onClick={navigateToNextPage} className="learn-more">
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span class="button-text">Learn More</span>
      </button>
    </div>
  );
}

export default Page1;
