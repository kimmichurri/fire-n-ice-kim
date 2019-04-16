import * as actions from './index';

describe('actions', () => {
  it('should return a type of HOUSE_DATA and houses', () => {
    const houses = [{house: 'a'}, {house: 'b'}]
    const expected = {
      type: 'HOUSE_DATA',
      houses
    }
    const result = actions.houseData(houses);
    expect(result).toEqual(expected);
  });

  it('should return a type of IS_LOADING with a boolean', () => {
    const boolean = true;
    const expected = {
      type: 'IS_LOADING',
      isLoading: boolean
    }
    const result = actions.isLoading(boolean);
    expect(result).toEqual(expected);
  });

});