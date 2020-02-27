import React from 'react';
import './Recipes.css';
import Recipe from '../Recipe/Recipe';
import Menu from '../Menu/Menu';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
//   useRouteMatch
// } from "react-router-dom";

const Recipes = () => (
  <div className="Recipes">
    <Menu />

    {/* {recipes.map(recipe => (
    <Recipe
      key={recipe.recipe.label}
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
    />
  ))}  */}
  </div>
);


export default Recipes;
