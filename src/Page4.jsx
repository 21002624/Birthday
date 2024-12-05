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
      <button onClick={navigateToNextPage} className="learn-more">
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span class="button-text">Next</span>
      </button>
    </div>
  );
}

export default Page4;
