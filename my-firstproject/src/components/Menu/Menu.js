import React from 'react';
import './Menu.css';
import { mySearchAction } from '../../actions/uiState';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { AppBar, Toolbar } from '@material-ui/core';



const Menu = (props) => {

  return (
    <div className="Menu">
      <AppBar position="fixed">
        <Toolbar>
          <input className="search-bar" type="text"
            value={props.searchInput}
            onChange={props.mySearch} />
          <Link to="/picture/tags/recipes/">
            <button className="search-button" type="submit">Search</button>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </div>
  );
}



const mapStateToProps = (state) => ({
  searchInput: state.uiState.searchInput
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions
  mySearch: (e) => dispatch(mySearchAction(e.target.value)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

