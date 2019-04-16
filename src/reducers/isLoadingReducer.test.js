import { isLoadingReducer }  from './isLoadingReducer';
import * as actions from '../actions/index';

describe('isLoadingReducer', () => {
  it('should return state by default', () => {
    const state = false;
    const action = {};
    const result = isLoadingReducer(state, action);
    expect(result).toEqual(state);
  });

  it('should return state with a boolean of true', () => {
    const state = false;
    const boolean = true;
    const action = actions.isLoading(boolean);
    const result = isLoadingReducer(state, action);
    expect(result).toEqual(boolean);
  });
});