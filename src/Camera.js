import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import './styles.css';

const videoConstraints = {
  width: 300,
  facingMode: 'user',
};

function Camera() {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  return (
    <>
    <h1 className='happy'>happy Birthday</h1>
    <div className='cameraContainer'>
      <p className='happy'>You know what’s even better than this page? Seeing you smile, Sree! 😄</p>
      <div className='web-cam'>
        
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/png"
          videoConstraints={videoConstraints}
          onUserMedia={onUserMedia}
          screenshotQuality={1}
          mirrored={true}
          className='camera'
        />

        <div className='btnDiv'>
          <button onClick={capturePhoto} class="btn">
            Click!
          </button>

          <button onClick={() => setUrl(null)} class="btn">
            Try new
          </button>
        </div>
      
        

        {url && (
          <div>
            <img src={url} alt="Screenshot" />
          </div>
        )}
      </div>
      <p className='happy'>make some screenshort for me and send it back
        to be, because i own this page, you can also save this image by right clicking</p>
      </div>
    </>
  );
}

export default Camera;
