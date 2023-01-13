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
  'primary-30': '#E2F5F0', // bar line
  'primary-i52': 'rgba(46, 223, 223, 0.2)', // only for filter btn hover effect
  light: '#dcefeb',
  primary: '#38AFA2',
  primaryLighten: '#98dae6',
  secondary: '#224456',
  gray1: '#202020',
  gray2: '#3f3f3f',
  gray3: '#4f4f4f',
  gray4: '#6f6f6f',
  gray5: '#7e7e7e',
  gray6: '#8e8e8e',
  gray7: '#bbbbbb',
  gray8: '#cfcfcf',
  gray9: '#e2e2e2',
  gray10: '#f5f5f5',
  'blue-50': '#63B1E1',
  'pink-50': '#FFA8A8', // for warning color
  'pink-i52': 'rgba(255, 168, 168, 0.5)',
  'gray-i50': '#BDBDBD',
  'gray-i100': '#9FA0A0',
  'gray-i150': '#828282',
  'gray-i200': '#4F4F4F',
  'gray-i250': '#333333', // not used
  'gray-t50': 'rgba(151, 151, 151, 0.2)', // for card shadow
  white: '#FFFFFF',
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
  'blue-50': generateFilter(colors['blue-50']),
  'pink-50': generateFilter(colors['pink-50']),
  'gray-i50': generateFilter(colors['gray-i50']),
  'gray-i150': generateFilter(colors['gray-i150']),
  'gray-i200': generateFilter(colors['gray-i200']),
  'gray-i250': generateFilter(colors['gray-i250']),

  white: generateFilter(colors.white),
}
