import { faMars, faQuestion, faVenus } from '@fortawesome/free-solid-svg-icons'

import { colors } from '../styles'

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
export const petSexIconConverter = (sex: string) => {
  switch (sex.toLowerCase()) {
    case 'm':
      return faMars
    case 'f':
      return faVenus
    default:
      return faQuestion
  }
}
export const petSexConverter = (sex: string) => {
  switch (sex) {
    case 'M':
      return { icon: faMars, text: '弟弟', color: colors['blue-50'] }
    case 'F':
      return { icon: faVenus, text: '妹妹', color: colors['pink-50'] }
    default:
      return { icon: faQuestion, text: unknown, color: colors['gray-i50'] }
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
export const searchQuery = (filter: GetPetReq) => {
  const params: any = {}
  if (filter.id) params.id = filter.id
  if (filter.kind) params.kind = filter.kind
  if (filter.age) params.age = filter.age
  if (filter.sex) params.sex = filter.sex
  if (filter.page) params.page = filter.page
  if (filter.species) params.species = filter.species
  if (filter.color) params.color = filter.color
  if (filter.city) params.city = filter.city
  if (filter.shelter) params.shelter = filter.shelter
  return params
}
