import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
function Page2() {
  const navigate = useNavigate();

  const navigateToNextPage = () => {
    navigate('/page3');
  };

  return (
    <div className='container'>

      <p>Hey Sreema, just wanted to say you’re looking extra cute today! 😘</p>
      <button onClick={navigateToNextPage}>Next</button>
    </div>
  );
}

export default Page2;
