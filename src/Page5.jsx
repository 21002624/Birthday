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
      <button onClick={navigateToNextPage}>Next</button>
    </div>
  );
}

export default Page5;
