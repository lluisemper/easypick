import React, { useState, useEffect } from 'react';
import './Preview.css';
import Menu from '../Menu/Menu';
import ApiClient from '../../ApiClient';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

const Preview = () => {
  const [myRecipe, setMyRecipe] = useState([]);

  useEffect(() => {
    ApiClient.getPictureDescription()
      .then(recipe => {
        setMyRecipe(recipe)
      });
  }, []);

  console.log(myRecipe);
  return(
    
  <div className="Preview">
    <Menu />
    <img src="http://localhost:4000/image.png"></img>
    <Link to="/picture/tags/recipes">
        <button type="button">
            ✓
        </button>
      </Link>
  </div>
);

}
export default Preview;
