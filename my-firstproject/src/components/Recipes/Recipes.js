import React from 'react';
import './Recipes.css';
import Recipe from '../Recipe/Recipe';
import Menu from '../Menu/Menu';
import { connect } from 'react-redux';


const Recipes = (props) => {

  return (
    <div className="Recipes">
      <Menu />
      <br></br>
      <div className="wrapper">
        {props.recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            recipe={recipe.recipe}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  //injects the value of the state
  recipes: state.uiState.recipes
});

export default connect(
  mapStateToProps,
  null
)(Recipes);
