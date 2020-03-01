import React, { useState } from 'react';
import './Recipe.css';

const Recipe = (props) => {
  
  const [myBoolean, setMyBoolean] = useState(true);

  const handleClick = () => {
    if (myBoolean === true) setMyBoolean(false);
    else setMyBoolean(true);
  }

  return (
    <div className="Recipe" onClick={handleClick}>
      <h1>{props.recipe.label}</h1>
      {myBoolean ?
        <img src={props.recipe.image} alt="" />
        :
        <ol>
          {props.recipe.ingredients.sort((a, b) => b.weight < a.weight ? -1 : 1)
          .slice(0, 1).map(ingredient => (
            <div>
              <h4>{ingredient.text}</h4>
              <h6>{'Conversion to grams: ' + Math.round(ingredient.weight) }</h6>
            </div>
            )
          )}
          {props.recipe.ingredients.sort((a, b) => b.weight < a.weight ? -1 : 1)
          .slice(1).map(ingredient => (
            <div>
              <h5>{ingredient.text}</h5>
              <h6>{'Conversion to grams: ' + Math.round(ingredient.weight) }</h6>
            </div>
            )
          )}
        </ol>
      }
    </div>
  );
}

export default Recipe;
