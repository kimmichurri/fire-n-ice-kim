import { combineReducers } from 'redux';
import { houseDataReducer } from './houseDataReducer';
import { isLoadingReducer } from './isLoadingReducer';

const rootReducer = combineReducers({
  houses: houseDataReducer,
  loading: isLoadingReducer
});

export default rootReducer