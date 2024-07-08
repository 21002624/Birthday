import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import sree1 from './asserts/sree1.jpg'
function Page6() {
  const navigate = useNavigate();

  const navigateToNextPage = () => {
    navigate('/page7');
  };

  return (
    <div className='container'>
      <h1></h1>
      <img className='img' src={sree1} />
      <button onClick={navigateToNextPage}>Next</button>
    </div>
  );
}

export default Page6;
