type PetKindUrlType = 'W' | 'C' | 'D'
type PetAgeUrlType = 'W' | 'A' | 'C'
type PetSexUrlType = 'W' | 'M' | 'F'
type PathType = 'home'
type CategoryItemType = {
  id: PetKindUrlType
  name: string
  icon: any
}
type PetType = {
  animal_id: number
  animal_subid: string
  animal_area_pkid: number
  animal_shelter_pkid: number
  animal_place: string
  animal_kind: string
  animal_Variety: string
  animal_sex: string
  animal_bodytype: string
  animal_colour: string
  animal_age: string
  animal_sterilization: string
  animal_bacterin: string
  animal_foundplace: string
  animal_title: string
  animal_status: string
  animal_remark: string
  animal_caption: string
  animal_opendate: string
  animal_closeddate: string
  animal_update: string
  animal_createtime: string
  album_file: string
  album_update: string
  cDate: string
  shelter_address: string
  shelter_tel: string
}
