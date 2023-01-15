import colorAlpha from 'color-alpha'
import { generateFilter } from 'colorize-filter'

export const sizes = {
  SM: 375,
  MD: 768,
  LG: 1024,
  XL: 1200,
}
export const SM = `@media (min-width: ${sizes.SM}px)`
export const MD = `@media (min-width: ${sizes.MD}px)`
export const LG = `@media (min-width: ${sizes.LG}px)`
export const XL = `@media (min-width: ${sizes.XL}px)`

export const colors = {
  light: '#DCEFEB',
  primary: '#89C7A9',
  primaryLighten: '#B4DAC8',
  secondary: '#13756F',
  gray1: '#202020',
  gray2: '#3F3F3F',
  gray3: '#4F4F4F',
  gray4: '#6F6F6F',
  gray5: '#7E7E7E',
  gray6: '#8E8E8E',
  gray7: '#BBBBBB',
  gray8: '#CFCFCF',
  gray9: '#E2E2E2',
  gray10: '#F5F5F5',
  blue: '#63B1E1',
  pink: '#FFA8A8',
  white: '#FFFFFF',
}
export const alpha = {
  primary: colorAlpha(colors.primary, 0.2),
  pink: colorAlpha(colors.pink, 0.2),
  gray3: colorAlpha(colors.gray3, 0.2),
}
export const filters = {
  light: generateFilter(colors.light),
  primary: generateFilter(colors.primary),
  primaryLighten: generateFilter(colors.primaryLighten),
  secondary: generateFilter(colors.secondary),
  gray1: generateFilter(colors.gray1),
  gray2: generateFilter(colors.gray2),
  gray3: generateFilter(colors.gray3),
  gray4: generateFilter(colors.gray4),
  gray5: generateFilter(colors.gray5),
  gray6: generateFilter(colors.gray6),
  gray7: generateFilter(colors.gray7),
  gray8: generateFilter(colors.gray8),
  gray9: generateFilter(colors.gray9),
  gray10: generateFilter(colors.gray10),
  blue: generateFilter(colors.blue),
  pink: generateFilter(colors.pink),
  white: generateFilter(colors.white),
}
export const shadow = {
  card: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
  filter: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
}
