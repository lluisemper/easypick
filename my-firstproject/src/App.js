import React, { useState, useEffect } from 'react';
import Recipe from './components/Recipe/Recipe';
import './App.css';
import Webcam from "react-webcam";
import ApiClient from './ApiClient';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';
import Picture from './components/Picture/Picture';
import Preview from './components/Preview/Preview';
import Recipes from './components/Recipes/Recipes';


const App = (props) => {

  const [recipes, setRecipes] = useState([]);
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [myRecipe, setMyRecipe] = useState([]);

  useEffect(() => {
    ApiClient.getPictureDescription()
      .then(recipe => {
        setMyRecipe(recipe)
        console.log(recipe);
      });
  }, []);


  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    // getRecipes();
    setSearch('');
  }

  const videoConstraints = {
    width: 516,
    height: 375,
    facingMode: "user"
  };

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      const myImages = [...images, imageSrc];
      ApiClient.postImage(myImages);
    },
    [webcamRef]
  );


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/picture">
          <Picture />
        </Route>
        <Route exact path="/picture/tags">
          <Preview />
        </Route>
        <Route exact path="/picture/tags/recipes">
          <Recipes />
        </Route>
      </Switch>
      {/* <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">Search</button>
        </form>
        <Webcam
          audio={false}
          height={375}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={516}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div> */}
    </Router>
  );
}

export default App;

