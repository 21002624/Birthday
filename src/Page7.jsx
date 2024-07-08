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
      <h1>Page 7</h1>
      <p>You’re the last page, but I hope this isn’t the end of our story. 💖</p>
      <button onClick={navigateToNextPage}>Next</button>
    </div>
  );
}

export default Page7;
