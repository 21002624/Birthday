import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
function Page7() {
  const navigate = useNavigate();

  const navigateToNextPage = () => {
    navigate('/page8');
  };

  return (
    <div className='container'>
       <p>You’re the last page, but I hope this isn’t the end of our story. 💖</p>
       <button onClick={navigateToNextPage} className="learn-more">
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span class="button-text">Next</span>
      </button>
    </div>
  );
}

export default Page7;
