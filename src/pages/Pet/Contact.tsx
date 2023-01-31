import * as i18n from 'i18next'

import {
  ContactWrap,
  Label,
  LabelAndValue,
  Value,
} from '../../styles/pages/Pet'

interface Props {
  profile: PetType
}
const Contact = ({ profile }: Props) => {
  const { animal_place, shelter_tel, shelter_address } = profile
  return (
    <ContactWrap>
      <LabelAndValue>
        <Label>{i18n.t('labels.shelter')}</Label>
        <Value>{animal_place}</Value>
      </LabelAndValue>
      <LabelAndValue>
        <Label>{i18n.t('labels.phone')}</Label>
        <Value>{shelter_tel}</Value>
      </LabelAndValue>
      <LabelAndValue>
        <Label>{i18n.t('labels.address')}</Label>
        <Value>{shelter_address}</Value>
      </LabelAndValue>
    </ContactWrap>
  )
}

export default Contact
