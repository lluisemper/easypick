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
            value={props.selectedTag}
            onChange={props.myTagPick}
            color="primary"
          />
        }
        label={props.selectedTag}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions
  myTagPick: (e) => dispatch(myTagSelection(e.target.value)),

});

export default connect(
  null,
  mapDispatchToProps
)(Checktag);
