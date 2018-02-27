import { combineReducers } from 'redux'

import { acctInput } from './reducers/acctInput.js'
import { accts } from './reducers/accts.js'
import { tableOptions } from './reducers/tableOptions.js'

// const initialState = {
//     acctInput: "",
//     accts: {},
//     acctSelected: "",
//     tableType: "compound",
//     tableSelected: "conflicts",
//     bannerType: "",
//     bannerPrompt: "",
//     fileManagement: { backups: [], showBackups: false },
//     filter: { active: false, value: "" }
// }

export const reducer = combineReducers({
    acctInput,
    accts,
    tableOptions
})