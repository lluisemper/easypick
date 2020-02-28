import React, { useState } from 'react';
import './Picture.css';
import Menu from '../Menu/Menu';
import Webcam from "react-webcam";
import ApiClient from '../../ApiClient';
import { Link } from "react-router-dom";

const Picture = () => {

  const [images, setImages] = useState([]);

  const videoConstraints = {
    width: 516,
    height: 375,
    facingMode: "user"
  };

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      const myImages = [...images, imageSrc];
      ApiClient.postImage(myImages);
    },
    [webcamRef]
  );

  return (
    <div className="Picture">
      <Menu />
      <Webcam
        audio={false}
        height={375}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={516}
        videoConstraints={videoConstraints}
      /> 
        <button onClick={capture}>Capture photo</button>
        <Link to="/picture/tags">
        <button type="button">
            ✓
        </button>
      </Link>

    </div>
  );
}

export default Picture;
