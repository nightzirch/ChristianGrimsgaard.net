import { appTheme, GradientName } from './appTheme';

export const theOnlyComponentTheme = {
  default: {
    textColor: appTheme.color.black,
    background: appTheme.color.white,
  },
  ['blue' as GradientName]: {
    textColor: appTheme.color.white,
    background: appTheme.gradient.blue,
  },
  ['brown' as GradientName]: {
    textColor: appTheme.color.white,
    background: appTheme.gradient.brown,
  },
  ['orange' as GradientName]: {
    textColor: appTheme.color.white,
    background: appTheme.gradient.orange,
  },
};
