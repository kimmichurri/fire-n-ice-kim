import { combineReducers } from 'redux';
import { houseDataReducer } from './houseDataReducer';

const rootReducer = combineReducers({
  houses: houseDataReducer
});

export default rootReducer