// actions
export const SUBMIT_ACCT_INPUT = 'SUBMIT_ACCT_INPUT';
export const ACCT_VALID = 'ACCT_VALID';
export const ACCT_INVALID = 'ACCT_INVALID';
export const CHANGE_ACCT = 'CHANGE_ACCT';
export const SELECT_TYPE = 'SELECT_TYPE';
export const SELECT_TABLE = 'SELECT_TABLE';
export const SUBMIT_REQUEST = 'SUBMIT_REQUEST';
export const LOAD_TABLE = 'LOAD_TABLE';
export const LOAD_FAILURE = 'LOAD_FAILURE';
export const RENDER_TABLE = 'RENDER_TABLE';
export const TABLE_NOT_CACHED = 'TABLE_NOT_CACHED';
export const CACHE_TABLE = 'CACHE_TABLE';
export const OPEN_FILE_OPTIONS = 'OPEN_FILE_OPTIONS';
export const CLOSE_FILE_OPTIONS = 'CLOSE_FILE_OPTIONS';
export const BACKUP_ACCT = 'BACKUP_ACCT';

// events
import events from './events/socketEvents';
export const {
  REST_ERROR,
  RESPONSE_BACKUP,
  RESPONSE_RESTAPI,
  RESPONSE_VALIDATE_CLIENT,
  REQUEST_LIST,
  REQUEST_LOCAL,
  REQUEST_BACKUP,
  REQUEST_GLOBAL,
  REQUEST_CONLFLICTS,
  REQUEST_VALIDATE_CLIENT,
  RELAY_TABLES
} = events;

// table keys
export { tables } from './events/tables';

// reducers
export { acctInput } from './reducers/acctInput';
export { dataTable } from './reducers/dataTable';
export { socket } from './reducers/socket';
export { tableOptions } from './reducers/tableOptions';

// reducers w/ dependencies
export { accts, initAcct } from './reducers/accts';

// action creators
export { backupAcct } from './actionCreators/backupAcct';
export { cacheTable } from './actionCreators/cacheTable';
export { changeSelect } from './actionCreators/changeSelect';
export { changeTable } from './actionCreators/changeTable';
export { changeTable_dispatch } from './actionCreators/changeTable';
export { changeType } from './actionCreators/changeType';
export { formatTableFromCache } from './actionCreators/formatTableFromCache';
export { restError } from './actionCreators/restError';
export { restRequest } from './actionCreators/restRequest';
export { submitAcct } from './actionCreators/submitAcct';
export { toggleOptions } from './actionCreators/toggleOptions';
export { validateClient } from './actionCreators/validateClient';

// helper functions and curries
export { filterRows } from './actionCreators/formatTableFromCache';
export { pipeDataToFormatTable } from './actionCreators/formatTableFromCache';
export { structureDataTable } from './actionCreators/formatTableFromCache';
export { callAPI } from './actionCreators/restRequest';
export { callPiRest } from './actionCreators/restRequest';
export { makeBody } from './utils/loadCache';
export { loadCache } from './utils/loadCache';
export { pipeDataToLoadCache } from './utils/loadCache';
export { prepDataToRender } from './utils/prepDataToRender';
export { dispatchRestResponse } from './utils/dispatchRestResponse';
