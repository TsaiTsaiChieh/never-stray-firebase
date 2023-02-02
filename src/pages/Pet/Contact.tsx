import * as i18n from 'i18next'

import {
  ContactWrap,
  Label,
  LabelAndValue,
  Value,
  Website,
} from '../../styles/pages/Pet'
import { b64DecodeUnicode } from '../../utils/helper'

interface Props {
  profile: PetType
}
const Contact = ({ profile }: Props) => {
  const { shelter_tel, shelter_address, animal_subid } = profile
  return (
    <ContactWrap>
      <LabelAndValue>
        <Label>{i18n.t('labels.phone')}</Label>
        <Value>{shelter_tel}</Value>
      </LabelAndValue>
      <LabelAndValue>
        <Label>{i18n.t('labels.address')}</Label>
        <Value>{shelter_address}</Value>
      </LabelAndValue>
      <LabelAndValue>
        <Label>{i18n.t('labels.link')}</Label>
        <Website
          href={`https://www.pet.gov.tw/AnimalApp/AnnounceSingle.aspx?PageType=Announce&AcNum=${b64DecodeUnicode(animal_subid)}`}
          target='_blank'
          rel='noreferrer'
        >
          {i18n.t('labels.website')}
        </Website>
      </LabelAndValue>
    </ContactWrap>
  )
}

export default Contact
