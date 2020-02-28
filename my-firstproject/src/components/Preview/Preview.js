import React, { useState, useEffect } from 'react';
import './Preview.css';
import Menu from '../Menu/Menu';
import ApiClient from '../../ApiClient';
import { Link } from "react-router-dom";
import Checktag from '../Checktag/Checktag';

const Preview = () => {

  const [myTags, setMyTags] = useState([]);

  useEffect(() => {
    ApiClient.getPictureDescription()
      .then(tag => {
        setMyTags(tag)
      });
  }, []);

  return (

    <div className="Preview">
      <Menu />
      <img src="http://localhost:4000/image.png" alt=""></img>
      {myTags.map(tag =>
        <Checktag
          key={tag}
          tag={tag} />
      )}
      <Link to="/picture/tags/recipes">
        <button type="button">
          ✓
        </button>
      </Link>
    </div>
  );

}
export default Preview;
