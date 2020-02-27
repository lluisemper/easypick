import React from 'react';
import './Picture.css';
import Menu from '../Menu/Menu';
// import Webcam from "react-webcam";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

const Picture = () => {
  return (
    <div className="Picture">
      <Menu />
      {/* <Webcam
        audio={false}
        height={375}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={516}
        videoConstraints={videoConstraints}
      /> */}
        {/* <button onClick={capture}>Capture photo</button> */}
        <Link to="/picture/tags">
        <button type="button">
            ✓
        </button>
      </Link>

    </div>
  );
}

export default Picture;
