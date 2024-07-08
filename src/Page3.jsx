import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
function Page3() {
  const navigate = useNavigate();

  const navigateToNextPage = () => {
    navigate('/page4');
  };

  return (
    <div className='container'>

      <p>No surprise Happy Birthday 🎂 pirantha naal valthukkal doil</p>
      <button onClick={navigateToNextPage}>Next</button>
    </div>
  );
}

export default Page3;
