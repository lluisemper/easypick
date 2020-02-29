import React from 'react';
import './Recipes.css';
import Recipe from '../Recipe/Recipe';
import Menu from '../Menu/Menu';
import { connect } from 'react-redux';
import { myTagSelection } from '../../actions/uiState';


const Recipes = (props) => {
  
  // const [recipes, setRecipes] = useState([]);

  return (
    <div className="Recipes">
      <Menu />

      {props.recipes.map(recipe => (
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
  //injects the value of the state
  recipes: state.uiState.recipes
});

export default connect(
  mapStateToProps,
  null
)(Recipes);
