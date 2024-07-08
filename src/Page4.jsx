import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
function Page4() {
  const navigate = useNavigate();

  const navigateToNextPage = () => {
    navigate('/page5');
  };

  return (
    <div className='container'>

      <p>Thanks for your 230 Rs 🤣</p>
      <button onClick={navigateToNextPage}>Next</button>
    </div>
  );
}

export default Page4;
