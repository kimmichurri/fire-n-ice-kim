import { houseDataReducer } from './houseDataReducer';
import * as actions from '../actions/index';

describe('houseDataReducer', () => {
  it('should return state by default', () => {
    const state = [];
    const action = {};
    const result = houseDataReducer(state, action);
    expect(result).toEqual(state);
  });
  
  it('should return state with some houses', () => {
    const state = [];
    const houses = [{house: 'a'}, {house: 'b'}];
    const action = actions.houseData(houses);
    const result = houseDataReducer(state, action);
    expect(result).toEqual(houses);
  });
});