type PetKindUrlType = 'C' | 'D'
type PetAgeUrlType = 'A' | 'C'
type PetSexUrlType = 'M' | 'F'
type CityUrlType =
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
type ShelterUrlType =
  | 48
  | 49
  | 50
  | 51
  | 53
  | 55
  | 56
  | 58
  | 59
  | 60
  | 61
  | 62
  | 63
  | 67
  | 68
  | 69
  | 70
  | 71
  | 72
  | 73
  | 74
  | 75
  | 76
  | 77
  | 78
  | 79
  | 80
  | 81
  | 82
  | 83
  | 89
  | 92
  | 96
type PathType = 'home'
type LabelValueType = {
  value: string | number
  label: string
}
type CategoryItemType = {
  id: number
  name: string
  iconPath: string
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
