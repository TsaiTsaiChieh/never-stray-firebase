import * as i18n from 'i18next'

import Contact from './Contact'
import InfoBoxes from './InfoBoxes'
import {
  Avatar,
  Container,
  Label,
  LabelAndValue,
  ShelterName,
  SummaryWrap,
  Value,
  UpdateTime,
  IntroWrap,
  AvatarWrap,
  IntroLabel,
  IntroValue,
  DetailWrap,
} from '../../styles/pages/Pet'
import { dateFormatter } from '../../utils/helper'

interface Props {
  profile: PetType
}
const Profile = ({ profile }: Props) => {
  const {
    album_file,
    animal_place,
    animal_update,
    animal_colour,
    animal_Variety,
    animal_remark,
    animal_subid,
  } = profile

  return (
    <Container>
      <AvatarWrap>
        <Avatar src={album_file === '' ? '/images/pet-null.svg' : album_file} />
      </AvatarWrap>
      <DetailWrap>
        <SummaryWrap>
          <ShelterName>{animal_place}</ShelterName>
          <LabelAndValue>
            <Label>{i18n.t('labels.update_time')}</Label>
            <UpdateTime>{dateFormatter(animal_update)}</UpdateTime>
          </LabelAndValue>
          <LabelAndValue>
            <Label>{i18n.t('labels.uid')}</Label>
            <Value>{animal_subid}</Value>
          </LabelAndValue>
          <LabelAndValue>
            <Label>{i18n.t('labels.color')}</Label>
            <Value>{animal_colour}</Value>
          </LabelAndValue>
          <LabelAndValue>
            <Label>{i18n.t('labels.species')}</Label>
            <Value>{animal_Variety}</Value>
          </LabelAndValue>
        </SummaryWrap>
        <InfoBoxes profile={profile} />
        <IntroWrap>
          <IntroLabel>{i18n.t('labels.introduction')}</IntroLabel>
          <IntroValue>{animal_remark === '' ? i18n.t('placeholders.empty_intro') : animal_remark}</IntroValue>
        </IntroWrap>
        <Contact profile={profile} />
      </DetailWrap>
    </Container>
  )
}

export default Profile
