import React from 'react';
import './Menu.css';
import * as uiStateActions from '../../actions/uiState';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ApiClient from "../../ApiClient";
import { AppBar, Toolbar } from '@material-ui/core';


const Menu = (props) => {

  const myRecipeCall = () => {
    return ApiClient.getRecipes(props.searchInput, props.filter)
      .then(data => console.log("data", data) || data)
      .then(recipe => props.myRecipeRender(recipe.hits));
  }

  return (
    <div className="Menu">
      <AppBar position="fixed">
        <Toolbar>
          <div >
            <h1>EasyPick</h1>
            <div className="filter-button">
              <button href="#" onClick={() => props.myfilterSelection('alcohol-free')}>Alcohol-free</button>
              <button href="#" onClick={() => props.myfilterSelection('vegan')}>Vegan</button>
              <button href="#" onClick={() => props.myfilterSelection('vegetarian')}> Vegetarian</button>
              <button href="#" onClick={() => props.myfilterSelection('sugar-conscious')}>Sugar-conscious</button>
              <button href="#" onClick={() => props.myfilterSelection('peanut-free')}>Peanut-free</button>
            </div>
          </div>
          <div className="menu-display">
            <Link to="/picture/">
              <button className="picture-button" type="submit">Picture</button>
            </Link>
            <Link to="/picture/tags/">
              <button className="picture-button" type="submit">Previous</button>
            </Link>
            <input className="search-bar" type="text"
              value={props.searchInput}
              onChange={e => props.mySearch(e.target.value)} />
            <Link to="/picture/tags/recipes/">
              <button className="search-button" type="submit"
                onClick={() => myRecipeCall()}>Search</button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </div>
  );
}


const mapDispatchToProps = {
  mySearch: uiStateActions.mySearchAction,
  myRecipeRender: uiStateActions.myRecipeRender,
  myfilterSelection: uiStateActions.myfilterSelection

}

const mapStateToProps = (state) => ({
  searchInput: state.uiState.searchInput,
  recipes: state.uiState.recipes,
  filter: state.uiState.filter,
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

