export const houseDataReducer = (state = [], action) => {
  switch(action.type) {
    case 'HOUSE_DATA':
      return [...state, ...action.houses];
    default:
      return state;
  }
}