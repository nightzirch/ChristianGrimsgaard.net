import { getRandomNumber } from './number';

export const getRandomItemFromArray = (arr: any[]): any => {
  if (arr.length === 0) return null;
  return arr[getRandomNumber(0, arr.length)];
};
