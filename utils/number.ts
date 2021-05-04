export const getRandomNumber = (from: number, to: number): number =>
  Math.floor(Math.random() * to) + from;
