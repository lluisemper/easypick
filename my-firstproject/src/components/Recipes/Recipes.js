import React, { useEffect, useState } from 'react';
import './Recipes.css';
import Recipe from '../Recipe/Recipe';
import Menu from '../Menu/Menu';

const Recipes = (props) => {
  
  const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   console.log(prop.searchInputs)
  //   ApiClient.getRecipes(props.searchInput)
  //     .then(recipe => {
  //       console.log('recipe', recipe);
  //       setRecipes(recipe.hits)
  //     });
  // }, [recipes]);

  return (
    <div className="Recipes">
      <Menu />

      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default Recipes;
