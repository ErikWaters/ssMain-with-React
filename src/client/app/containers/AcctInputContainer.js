import React, { Component } from 'react'
import { connect } from 'react-redux'

import { validateInput } from '../services/'
import { socket } from '../store/socket'

import Input from '../components/Input'

// action creators
import { 
    submitAcct,
    validateClient
} from '../store/reducers/acctInput'

// action keys
import {
    SUBMIT_ACCT_INPUT,
    RESPONSE_VALIDATE_CLIENT
} from '../store/actions/'

class AcctInputContainer extends Component {
    state = {
        inputValue: ''
    }
    
    componentWillMount() {
        socket.on(RESPONSE_VALIDATE_CLIENT, (data) => {
            this.props.validateClient(data)
        })
    }
    
    render() {
        return(
            <div>
                <Input
                    prompt="Enter an Account #:"
                    selector="acctInput"
                    value={this.state.inputValue}
                    change={this.handleInputChange.bind(this)}
                    submit={this.handleInputSubmit.bind(this)} />
                <p>{this.props.message}</p>
            </div>
        )
    }

    handleInputChange(e) {
        this.setState({
            inputValue: validateInput(e.target.value)
        })
    }

    handleInputSubmit() {
        this.setState({
            inputValue: ""
        })
        this.props.submit(this.state.inputValue)
    }
}

const mapState = state => {
    return {
        message: state.acctInput.message
    }
}

const mapDispatch = dispatch => {
    return {
        submit: (value) => dispatch( submitAcct(value) ),
        validateClient: (data) => dispatch( validateClient(data) ),
    }
}

export default connect(mapState, mapDispatch)(AcctInput)