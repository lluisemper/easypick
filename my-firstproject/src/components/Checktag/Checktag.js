import React from 'react';
import './Checktag.css';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { connect } from 'react-redux';
import { myTagSelection } from '../../actions/uiState';


const Checktag = (props) => {

  return (
    <div className="Checkbox">
      <FormControlLabel
        control={
          <Checkbox
            value={props.tag}
            onChange={props.myTagPick}
            color="primary"
          />
        }
        label={props.tag}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  //injects the value of the state
  pickTag: state.uiState.pickTag
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions
  myTagPick: (e) => dispatch(myTagSelection(e.target.value)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checktag);
