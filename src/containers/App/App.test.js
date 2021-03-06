import App from './App';
import { mapStateToProps, mapDispatchToProps } from './App';
import { houseData, isLoading } from '../../actions';

describe('App', () => {
  describe('mapStateToProps', () => {
    it('should return an object with loading as props', () => {
      const mockState = {
        loading: true,
        randomThing: 'randomThing'
      }
      const expected = {
        loading: true
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
  
  describe('mapDispatchToProps', () => {
    it('should return an object with houseData as props', () => {
      const houses = [{house: 'a'}, {house: 'b'}]
      const mockDispatch = jest.fn();
      const actionToDispatch = houseData(houses);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.houseData(houses);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should return an object with isLoading as props', () => {
      const boolean = true;
      const mockDispatch = jest.fn();
      const actionToDispatch = isLoading(boolean);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.isLoading(boolean);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});