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
      <div className="headRecipe">

      <h2>{props.recipe.label}</h2>
      </div>
      {myBoolean ?
        <img src={props.recipe.image} alt="" />
        :
        <ol className="oneRecipe">
          {props.recipe.ingredients.sort((a, b) => b.weight < a.weight ? -1 : 1)
          .slice(0, 1).map(ingredient => (
            <div className="mainIng">
              <h4 className="mainIngHead">{ingredient.text}</h4>
              <h6 className="ingredient">{'Conversion to grams: ' + Math.round(ingredient.weight) }</h6>
            </div>
            )
          )}
          {props.recipe.ingredients.sort((a, b) => b.weight < a.weight ? -1 : 1)
          .slice(1).map(ingredient => (
            <div>
              <h5 className="secondIngredient">{ingredient.text}</h5>
              <h6 className="ingredient">{'Conversion to grams: ' + Math.round(ingredient.weight) }</h6>
            </div>
            )
          )}
        </ol>
      }
    </div>
  );
}

export default Recipe;
