import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactTable from 'react-table'

import { socket } from '../store/socket'

// library
import { isTrue } from '../services'

// action creators
import { renderTable } from '../store/reducers/dataTable'

// action keys
import {
    LOAD_TABLE,
    RESPONSE_RESTAPI
} from '../store/actions/'

// css stuff down here
import 'react-table/react-table.css'

class DataTableContainer extends Component {
    render() {
        const parentClass = this.props.visible ?
            "dataTable" : "hidden"
        return (
            <div className={parentClass}>
                <ReactTable
                    data={this.props.data}
                    columns={this.props.columns} />
            </div>
        )
    }
}

const mapState = state => {
    return {
        data: state.dataTable.tableData,
        columns: state.dataTable.columns,
        visible: state.dataTable.visible,
    }
}

const mapDispatch = dispatch => {
    return {
        renderTable: (data) => dispatch( renderTable(data) )
    }
}

export default connect(mapState, mapDispatch)(DataTable)
