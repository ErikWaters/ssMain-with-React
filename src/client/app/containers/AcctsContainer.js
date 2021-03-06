import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select } from '../components';
// library
import { createSelectOptions, showIfTrue } from '../services/';
// action creators
import { changeSelect } from '../store/';

class AcctsContainer extends Component {
  handleSelectChange = e => {
    this.props.changeSelect(e.target.value);
  };

  render() {
    const numAccts = this.props.accts
      ? Object.keys(this.props.accts).length
      : 0;
    return (
      <div
        style={{
          display: numAccts > 1 ? 'block' : 'none'
        }}>
        <Select
          prompt='Select an Account:'
          value={this.props.selectValue}
          options={createSelectOptions(this.props.accts)}
          change={this.handleSelectChange}
        />
      </div>
    );
  }
}

const mapState = state => {
  return {
    accts: state.accts.accts,
    selectValue: state.accts.selectedAcct,
    type: state.tableOptions.type
  };
};

const mapDispatch = dispatch => {
  return {
    changeSelect: value => dispatch(changeSelect(value))
  };
};

export default connect(
  mapState,
  mapDispatch
)(AcctsContainer);
