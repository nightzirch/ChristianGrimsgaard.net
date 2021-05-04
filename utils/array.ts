import { getRandomNumber } from './number';

export const getRandomItemFromArray = <T>(arr: T[]): T | undefined => {
  if (arr.length === 0) return;
  return arr[getRandomNumber(0, arr.length)];
};
