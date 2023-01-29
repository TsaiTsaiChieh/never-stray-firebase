import { forwardRef, Ref } from 'react'

import { useNavigate } from 'react-router-dom'

import Avatar from './Avatar'
import { Paths } from '../../constants'
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
  petNameConverter,
  petSexConverter,
} from '../../utils/helper'

interface Props {
  detail: PetType
}
export const Card = forwardRef(
  ({ detail }: Props, ref: Ref<HTMLDivElement>) => {
    const nav = useNavigate()
    const {
      animal_colour,
      animal_Variety,
      animal_kind,
      animal_sex,
      animal_age,
    } = detail
    const sex = petSexConverter(animal_sex)
    const age = petAgeConverter(animal_age)
      const go2pet = () => {
        nav(`${Paths.pet}/${detail.animal_id}`, { state: { detail } })
      }
    return (
      <OuterHoverWrap ref={ref}>
        <CardContainer>
          <Avatar detail={detail} />
          <Name>{petNameConverter(animal_colour, animal_kind)}</Name>
          <KindText>{mixAntiReplace(animal_Variety)}</KindText>
          <LearnMore as='button' onClick={go2pet}>
            <SexWrap>
              <SexIcon
                $content={sex.iconPath}
                filter={sex.color}
                alt={sex.name}
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
