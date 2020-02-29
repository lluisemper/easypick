import React from 'react';
import './Menu.css';
import * as uiStateActions from '../../actions/uiState';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ApiClient from "../../ApiClient";
import { AppBar, Toolbar } from '@material-ui/core';


const Menu = (props) => {
  
  const myRecipeCall = () => {
    return ApiClient.getRecipes(props.searchInput)
    .then(data => console.log("data", data) || data)
      .then(recipe => props.myRecipeRender(recipe.hits));
  }

  return (
    <div className="Menu">
      <AppBar position="fixed">
        <Toolbar>
          <input className="search-bar" type="text"
            value={props.searchInput}
            onChange={e => props.mySearch(e.target.value)} />
          <Link to="/picture/tags/recipes/">
            <button className="search-button" type="submit"
              onClick={() => myRecipeCall()}>Search</button>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </div>
  );
}



const mapStateToProps = (state) => ({
  searchInput: state.uiState.searchInput,
  recipes: state.uiState.recipes
});

// const mapDispatchToProps = (dispatch) => ({
//   // Map your dispatch actions
//   mySearch: (e) => dispatch(mySearchAction(e.target.value)),
//   myRecipeRender: (hits) => {
//     const action = myRecipeRender(hits)
//     console.log("action", action)
//     dispatch(action)
//   }
  
// });

const mapDispatchToProps = {
  mySearch: uiStateActions.mySearchAction,
  myRecipeRender: uiStateActions.myRecipeRender
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

