import React, { useEffect, useState } from 'react';
import './Recipes.css';
import Recipe from '../Recipe/Recipe';
import Menu from '../Menu/Menu';
import { connect } from 'react-redux';

const REACT_APP_ID=process.env.REACT_APP_ID;
const REACT_APP_KEY=process.env.REACT_APP_KEY;

const Recipes = (props) => {
  console.log(props);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes(props) {
      const URL_API = `https://api.edamam.com/search?q=${props.searchInput}&app_id=${REACT_APP_ID}&app_key=${REACT_APP_KEY}`;
      const response = await fetch(URL_API);
      const data = await response.json();
      setRecipes(data.hits);
    }
    console.log('porps',props);

    getRecipes(props);
  }, []);
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
const mapStateToProps = (state) => ({
  searchInput: state.uiState.searchInput
});

export default connect(
  mapStateToProps,
)(Recipes);
