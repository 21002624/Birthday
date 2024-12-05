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

      <img className='img' src={sree1} alt='iamges'/>
      <button onClick={navigateToNextPage} className="learn-more">
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span class="button-text">Next</span>
      </button>
    </div>
  );
}

export default Page6;
