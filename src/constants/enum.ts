export const PetKindEnum: { [key in PetKindUrlType]: string } = {
  C: '貓',
  D: '狗',
}
export const PetAgeEnum: { [key in PetAgeUrlType]: string | undefined } = {
  W: undefined,
  A: 'adult',
  C: 'child',
}
export const PetSexEnum: { [key in PetSexUrlType]: string | undefined } = {
  W: undefined,
  M: 'M',
  F: 'F',
}
