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
  Bg: '#FAFAFA',
  detailBg: '#EBF8F7',
  'primary-10': '#EBF8F7', // nav and learn more btn
  'primary-100': '#47DDB3', // main color
  'primary-150': '#a9efdb', // main hover color
  'primary-200': '#309D91', // hover text color for primary-150
  'secondary-50': '#2D9CDB', // not used
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
  'primary-100': generateFilter(colors['primary-100']),
  'primary-200': generateFilter(colors['primary-200']),
  'blue-50': generateFilter(colors['blue-50']),
  'pink-50': generateFilter(colors['pink-50']),
  'gray-i50': generateFilter(colors['gray-i50']),
  'gray-i150': generateFilter(colors['gray-i150']),
  'gray-i200': generateFilter(colors['gray-i200']),
  'gray-i250': generateFilter(colors['gray-i250']),
  white: generateFilter(colors.white),
}
