import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

const CloudinaryUploadAndTwilio = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);


  const uploadToCloudinary = async (imageBase64) => {
    try {
      const formData = new FormData();
      formData.append('file', imageBase64);
      formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET); 

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );

      return response.data.secure_url; 
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      throw new Error('Cloudinary upload failed');
    }
  };


  const sendWhatsAppMessage = async (imageUrl) => {
    try {
      const messageData = new URLSearchParams({
        From: `whatsapp:${process.env.REACT_APP_TWILIO_FROM}`,
        To: `whatsapp:${process.env.REACT_APP_WHATSAPP_TO}`,
        Body: 'Here is your captured image!',
        MediaUrl: imageUrl, 
      });

      const auth = btoa(`${process.env.REACT_APP_TWILIO_ACCOUNT_SID}:${process.env.REACT_APP_TWILIO_AUTH_TOKEN}`);

      await axios.post(`https://api.twilio.com/2010-04-01/Accounts/${process.env.REACT_APP_TWILIO_ACCOUNT_SID}/Messages.json`, messageData, {
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
    }
  };


  const capturePhoto = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageUrl(imageSrc);
    setLoading(true);

    try {
      const uploadedImageUrl = await uploadToCloudinary(imageSrc); 
      await sendWhatsAppMessage(uploadedImageUrl); 
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }, [webcamRef]);

  return (
    <div>
      <h1>Happy Birthday!</h1>
      <div className='cameraContainer'>
      <p className='happy'>You know what’s even better than this page? Seeing you smile, Sree! 😄</p>
      <div className='web-cam'>
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/png"
          videoConstraints={{ facingMode: 'user', width: 300 }}
          className="camera"
        />
        <div className='btnDiv'>
          <button class="btn" onClick={capturePhoto} disabled={loading}>
            {loading ? 'Processing...' : 'Click !'}
          </button>
          <button onClick={() => setUrl(url)} class="btn">
            Try new
          </button>
        </div>
        
        {imageUrl && <img src={imageUrl} alt="Captured" style={{ marginTop: '20px' }} />}
      </div>
      <p className='happy'>make some screenshort for me and send it back
      to be, because i own this page, you can also save this image by right clicking</p>
      </div>
      
    </div>
  );
};

export default CloudinaryUploadAndTwilio;
