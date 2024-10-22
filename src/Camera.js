import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 300,
  facingMode: 'environment',
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
    <h1 className='happy'>happy Birth Day Fake Friend ❤️</h1>
    <p className='happy'>You know what’s even better than this page? Seeing you smile, Sree! 😄</p>
    <div className='web-cam'>
      
      <Webcam
        ref={webcamRef}
        audio={true}
        screenshotFormat="image/png"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
        mirrored={true}
        screenshotQuality={1}
      />
      
      <button onClick={capturePhoto}>Capture</button>
      <button onClick={() => setUrl(null)}>Refresh</button>

      {url && (
        <div>
          <img src={url} alt="Screenshot" />
        </div>
      )}
    </div>
    <p className='happy'>make some screenshort for me and send it back
      to be, because i own this page, you can also save this image by right clicking</p>
    </>
  );
}

export default Camera;
