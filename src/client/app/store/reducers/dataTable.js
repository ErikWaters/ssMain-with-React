import { filterTable } from '../../services'
import { tables } from '../actions'
// event keys
import {
    // redux actions
    LOAD_TABLE,
    RENDER_TABLE,
} from '../actions/'
// state
const initialState = {
    tableData: [],
    columns: []
}
let getHeaders = ( obj, headers = [] ) => {
    Object.keys(obj).map( (header) => headers.push( {Header: header, accessor: header} ) )
    return headers
}
// action creators
export const renderTable = data => {
    let tableData = filterTable( data.table, JSON.parse(data.body) )
    return {
        type: RENDER_TABLE,
        columns: getHeaders( tableData[0] ),
        table: tableData,
    }
}
// reducer
export const dataTable = (state = initialState, action) => {
    switch (action.type) {
        case RENDER_TABLE:
            return { ...state, tableData: action.table, columns: action.columns }
        default:
            return state
    }
    return state
}
