import { filters } from '../styles'

const unknown = '未知'
export const petKindConverter = (kind: string): string => {
  switch (kind) {
    case '狗':
      return '汪'
    case '貓':
      return '喵'
    default:
      return kind
  }
}
export const petNameConverter = (color: string, kind: string): string => `${color.replace('色', '')}${petKindConverter(kind)}`
export const petSexConverter = (sex: string): SexIconType => {
  switch (sex) {
    case 'M':
      return {
        iconPath: '/images/mars.svg',
        name: '弟弟',
        color: filters.blue,
      }
    case 'F':
      return {
        iconPath: '/images/venus.svg',
        name: '妹妹',
        color: filters.pink,
      }
    default:
      return {
        iconPath: '/images/question.svg',
        name: unknown,
        color: filters.gray6,
      }
  }
}
export const petAgeConverter = (age: string): string => {
  switch (age.toLowerCase()) {
    case 'adult':
      return '成年'
    case 'child':
      return '幼年'
    default:
      return unknown
  }
}
export const isPositiveInteger = (str: string): boolean => {
  if (typeof str !== 'string') return false
  const num = Number(str)
  if (Number.isInteger(num) && num > 0) return true
  return false
}
export const searchQuery = (filter: GetPetsReq) => {
  const params: any = {}
  if (filter.id) params.id = filter.id
  if (filter.kind) params.kind = filter.kind
  if (filter.age) params.age = filter.age
  if (filter.sex) params.sex = filter.sex
  if (filter.species) params.species = filter.species
  if (filter.color) params.color = filter.color
  if (filter.city) params.city = filter.city
  if (filter.shelter) params.shelter = filter.shelter
  if (filter.page) params.page = filter.page
  return params
}
export const mixAntiReplace = (str: string): string => str.replace('混種', '米克斯').trim()
export const mixReplace = (str: string): string => str.replace('米克斯', '混種').trim()
export const dateFormatter = (str: string): string => str.replaceAll('/', '-')
