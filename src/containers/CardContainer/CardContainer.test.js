import CardContainer from './CardContainer';
import { mapStateToProps } from './CardContainer';

describe('CardContainer', () => {
  describe('mapStateToProps', () => {
    it('should return an object with houses', () => {
      const mockState = {
        houses: [{house: 'a'}, {house: 'b'}],
        loading: true,
        randomThing: 'randomThing'
      }
      const expected = {
        houses: [{house: 'a'}, {house: 'b'}]
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});