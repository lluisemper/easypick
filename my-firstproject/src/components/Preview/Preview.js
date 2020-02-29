import React, { useState, useEffect } from 'react';
import './Preview.css';
import Menu from '../Menu/Menu';
import ApiClient from '../../ApiClient';
import { Link } from "react-router-dom";
import Checktag from '../Checktag/Checktag';
import { connect } from 'react-redux';
import * as uiStateActions from '../../actions/uiState';

const Preview = (props) => {
  const myString = props.pickTag.toString().replace(/,/g, ' ');

  const [myTags, setMyTags] = useState([]);

  useEffect(() => {
    ApiClient.getPictureDescription()
      .then(tag => {
        setMyTags(tag)
      });
  }, []);

  // I have to change the props.searchInputs per el check tags

  const myRecipeCall = () => {
    return ApiClient.getRecipes(myString)
    .then(data => console.log("data", data) || data)
      .then(recipe => props.myRecipeRender(recipe.hits));
  }

  return (

    <div className="Preview">
      <Menu />
      <img src="http://localhost:4000/image.png" alt=""></img>
      {myTags.map(tag =>
        <Checktag
          key={tag}
          tag={tag} />
      )}
      <Link to="/picture/tags/recipes">
        <button type="button" onClick={() => myRecipeCall()}>
          ✓
        </button>
      </Link>
    </div>
  );

}
const mapDispatchToProps = {
  myRecipeRender: uiStateActions.myRecipeRender
}

const mapStateToProps = (state) => ({
  pickTag: state.uiState.pickTag
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);
