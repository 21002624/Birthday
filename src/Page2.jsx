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
      <button onClick={navigateToNextPage} className="learn-more">
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span class="button-text">Next</span>
      </button>
    </div>
  );
}

export default Page2;
