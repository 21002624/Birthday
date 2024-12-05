import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import sree from './asserts/sree.jpg';

function Page5() {
  const navigate = useNavigate();

  const navigateToNextPage = () => {
    navigate('/page6');
  };

  return (
    <div className='container'>

      <p>Cuitest ScreenShort i took todat </p>
      <img className="img" src={sree} alt='imges'/>
      <button onClick={navigateToNextPage} className="learn-more">
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span class="button-text">Next</span>
      </button>
    </div>
  );
}

export default Page5;
