import React from 'react';
import './Preview.css';
import Menu from '../Menu/Menu';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

const Preview = () => (
  <div className="Preview">
    <Menu />
    <h1>foooooooooooooooo</h1>
    <h1>foooooooooooooooo</h1>
    <h1>foooooooooooooooo</h1>
    <h1>foooooooooooooooo</h1>
    <h1>foooooooooooooooo</h1>
    <h1>foooooooooooooooo</h1>
    <h1>foooooooooooooooo</h1>
    <Link to="/picture/tags/recipes">
        <button type="button">
            ✓we
        </button>
      </Link>
  </div>
);


export default Preview;
