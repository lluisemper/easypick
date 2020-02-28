import React, { useState, useEffect } from 'react';
import './App.css';
import ApiClient from './ApiClient';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home/Home';
import Picture from './components/Picture/Picture';
import Preview from './components/Preview/Preview';
import Recipes from './components/Recipes/Recipes';


const App = () => {

  const [myRecipe, setMyRecipe] = useState([]);

  useEffect(() => {
    ApiClient.getPictureDescription()
      .then(recipe => {
        setMyRecipe(recipe)
        console.log(recipe);
      });
  }, []);

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
    </Router>
  );
}

export default App;

