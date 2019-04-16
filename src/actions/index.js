export const houseData = (houses) => ({
  type: 'HOUSE_DATA',
  houses
});

export const isLoading = (boolean) => ({
  type: 'IS_LOADING',
  isLoading: boolean
});