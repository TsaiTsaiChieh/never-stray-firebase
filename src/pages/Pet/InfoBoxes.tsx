import * as i18n from 'i18next'

import { InfoBox } from '../../components'
import { InfoBoxWrap } from '../../styles/pages/Pet'
import { SexIcon } from '../../styles/pages/PetList'
import {
 petAgeConverter, petSexConverter, petSizeConverter, ternaryConverter,
} from '../../utils/helper'

interface Props {
  profile: PetType
}
const InfoBoxes = ({ profile }:Props) => {
  const {
 animal_sex, animal_age, animal_bodytype, animal_sterilization,
} = profile
  const sex = petSexConverter(animal_sex)
  return (
    <InfoBoxWrap>
      <InfoBox label={i18n.t('labels.sex')!} value={<SexIcon $content={sex.iconPath} filter={sex.color} alt={sex.name} />} />
      <InfoBox label={i18n.t('labels.age')!} value={petAgeConverter(animal_age)} />
      <InfoBox label={i18n.t('labels.size')!} value={petSizeConverter(animal_bodytype)} />
      <InfoBox label={i18n.t('labels.sterilization')!} value={ternaryConverter(animal_sterilization)} />
    </InfoBoxWrap>
  )
}

export default InfoBoxes
