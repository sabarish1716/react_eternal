
import { combineReducers } from 'redux';

import commonReducer from './commonReducers';
import errorReducer from './errorReducers'


export default combineReducers({
    common: commonReducer,
    error: errorReducer,
});



//5th video