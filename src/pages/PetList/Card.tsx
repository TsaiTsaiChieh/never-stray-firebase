import { forwardRef, Ref } from 'react'

import { useNavigate } from 'react-router-dom'

import Avatar from './Avatar'
import { Paths } from '../../constants'
import { useAppDispatch } from '../../store/hook'
import { setPets } from '../../store/reducers/petSlice'
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
  data: PetType[]
  currIdx: number
}
export const Card = forwardRef(
  ({ data, currIdx }: Props, ref: Ref<HTMLDivElement>) => {
    const dispatch = useAppDispatch()
    const nav = useNavigate()
    const {
      animal_id,
      animal_colour,
      animal_Variety,
      animal_kind,
      animal_sex,
      animal_age,
    } = data[currIdx]
    const sex = petSexConverter(animal_sex)
    const age = petAgeConverter(animal_age)
    const go2pet = () => {
      dispatch(setPets({ pets: data, currIdx }))
      nav(`${Paths.pet}/${animal_id}`)
    }
    return (
      <OuterHoverWrap ref={ref}>
        <CardContainer>
          <Avatar detail={data[currIdx]} />
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
