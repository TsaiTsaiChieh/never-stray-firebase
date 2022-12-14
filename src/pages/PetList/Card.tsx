import { forwardRef, Ref } from 'react'

import Avatar from './Avatar'
import {
  AgeText,
  Bar,
  CardContainer,
  KindText,
  LearnMore,
  Name,
  OuterHoverWrap,
  SexIcon,
  SexText,
  SexWrap,
} from '../../styles/pages/PetList'
import {
  mixAntiReplace,
  petAgeConverter,
  petKindConverter,
  petSexConverter,
} from '../../utils/helper'

interface Props {
  detail: PetType
}
export const Card = forwardRef(
  ({ detail }: Props, ref: Ref<HTMLDivElement>) => {
    const {
      animal_colour,
      animal_Variety,
      animal_kind,
      animal_sex,
      animal_age,
    } = detail
    const petName = `${animal_colour.replace('色', '')}${petKindConverter(
      animal_kind,
    )}`
    const sex = petSexConverter(animal_sex)
    const age = petAgeConverter(animal_age)

    return (
      <OuterHoverWrap ref={ref}>
        <CardContainer>
          <Avatar src={detail.album_file} />
          <Name>{petName}</Name>
          <KindText>{mixAntiReplace(animal_Variety)}</KindText>
          <LearnMore as='button'>
            <SexWrap>
              <SexIcon
                $content={sex.iconPath}
                filter={sex.color}
                alt='sex.name'
              />
              <SexText>{sex.name}</SexText>
            </SexWrap>
            <Bar />
            <AgeText>{age}</AgeText>
          </LearnMore>
        </CardContainer>
      </OuterHoverWrap>
    )
  },
)
Card.displayName = 'Card'
