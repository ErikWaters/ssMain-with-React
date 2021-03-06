import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validateAcctNumberInput } from '../services/';
import { Input } from '../components';
import { submitAcct } from '../store/';
// reducer
class AcctInputContainer extends Component {
  state = {
    inputValue: ''
  };

  handleInputChange = e => {
    this.setState({ inputValue: validateAcctNumberInput(e.target.value) });
  };
  handleInputSubmit = () => {
    this.setState({ inputValue: '' });
    this.props.submit(this.state.inputValue);
  };

  render() {
    return (
      <div>
        <Input
          prompt='Enter an Account #:'
          selector='acctInput'
          value={this.state.inputValue}
          change={this.handleInputChange}
          submit={this.handleInputSubmit}
          message={this.props.message}
          status={this.props.status}
        />
      </div>
    );
  }
}

const mapState = state => {
  return {
    message: state.acctInput.message,
    status: state.acctInput.status
  };
};

const mapDispatch = dispatch => {
  return {
    submit: value => dispatch(submitAcct(value))
  };
};

export default connect(
  mapState,
  mapDispatch
)(AcctInputContainer);
