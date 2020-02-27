import React from 'react';
import './Recipe.css';

const Recipe = (props) => {
 return (
    <div className="Recipe">
      <h1>{props.title}</h1>
      <p>{props.calories}</p>
      <img src={props.image} alt=""/>
    </div>
  );
}

export default Recipe;
