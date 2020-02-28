import React from 'react';
import './Home.css';
import Menu from '../Menu/Menu';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import { Button } from '@material-ui/core';


const Home = () => {


  return (
    <div className="Home">
      <Menu />
      <p>Food is any substance consumed to provide nutritional support for an organism.
       Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.
       The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth.
        Historically, humans secured food through two methods: hunting and gathering and agriculture, which gave modern humans a mainly omnivorous diet.
        Worldwide, humanity has created numerous cuisines and culinary arts, including a wide array of ingredients, herbs, spices, techniques, and dishes.
    </p>
      <Link to="/picture">
        <Button type="button">
          Get Started
        </Button>
      </Link>
    </div>
  );
}

export default Home;

