export const color = {
  white: '#ffffff',
  black: '#000000',
  scarlet: '#ff1e00', // Deep orange
  gold: '#ffd40c', // Yellow
  toreaBay: '#093caf', // Dark blue
  brightTurquoise: '#15e1ee', // Light blue
  indianTan: '#461e01', // Dark brown
  flushOrange: '#ff7800', // Light orange
};

export type ColorName = keyof typeof color;

export const gradient = {
  orange: `linear-gradient(45deg, ${color.scarlet} 0%, ${color.gold} 100%)`,
  blue: `linear-gradient(45deg, ${color.toreaBay} 0%, ${color.brightTurquoise} 100%)`,
  brown: `linear-gradient(45deg, ${color.indianTan} 0%, ${color.flushOrange} 100%)`,
};

export type GradientName = keyof typeof gradient;

export const appTheme = {
  color,
  gradient,
};
