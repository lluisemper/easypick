import React, { useEffect } from 'react';
import './Preview.css';
import Menu from '../Menu/Menu';
import ApiClient from '../../ApiClient';
import { Link } from "react-router-dom";
import Checktag from '../Checktag/Checktag';
import { connect } from 'react-redux';
import * as uiStateActions from '../../actions/uiState';

const Preview = (props) => {
  const myString = props.pickTag.toString().replace(/,/g, ' ');

  useEffect(() => {
    ApiClient.getPictureDescription()
      .then(tag => console.log("tag", tag) || tag)
      .then(tag => props.myTagRender(tag));
  }, []);

  const myRecipeCall = () => {
    return ApiClient.getRecipes(myString)
      .then(data => console.log("data", data) || data)
      .then(recipe => props.myRecipeRender(recipe.hits));
  }

  return (

    <div className="Preview">
      <Menu />
      <div className="wrapperPreview">
        <img className="image" src="http://localhost:4000/image.png" alt=""></img>
        <div className="tags">
          {props.tag.map(selectedTag =>
            <Checktag
              key={selectedTag}
              selectedTag={selectedTag[0].toUpperCase() + selectedTag.slice(1)} />
          )}
        <Link to="/picture/tags/recipes">
          <button type="button" onClick={() => myRecipeCall()}>
            ✓
        </button>
        </Link>
        </div>
      </div>
    </div>
  );

}
const mapDispatchToProps = {
  myRecipeRender: uiStateActions.myRecipeRender,
  myTagRender: uiStateActions.myTagRender,
}

const mapStateToProps = (state) => ({
  pickTag: state.uiState.pickTag,
  tag: state.uiState.tag
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);
