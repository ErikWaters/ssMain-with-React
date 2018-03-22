import React, { Component } from 'react'
// containers
import AcctInputContainer from './containers/AcctInputContainer'
import AcctsContainer from './containers/AcctsContainer'
import TableOptionsContainer from './containers/TableOptionsContainer'
import DataTableContainer from './containers/DataTableContainer'

import './styles/App.css'

class App extends Component {
    render() {
        return(
            <div>
                <AcctInputContainer />
                <AcctsContainer />
                <TableOptionsContainer />
                <DataTableContainer />
            </div>
        )
    }
}

export default App
