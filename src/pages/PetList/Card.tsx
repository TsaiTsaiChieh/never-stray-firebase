import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  AgeText,
 Bar,
 CardContainer, KindText, LearnMore, Name, OuterHoverWrap, SexText, SexWrap,
} from '../../styles/pages/PetList'
import { petAgeConverter, petKindConverter, petSexConverter } from '../../utils/helper'
import Avatar from './Avatar'

interface Props {
  detail: PetType
}
const Card = ({ detail }: Props) => {
  const {
 animal_colour, animal_Variety, animal_kind, animal_sex, animal_age,
} = detail
  const petName = `${animal_colour.replace('色', '')}${petKindConverter(animal_kind)}`
  const sex = petSexConverter(animal_sex)
  const age = petAgeConverter(animal_age)
  return (
    <OuterHoverWrap>
      <CardContainer>
        <Avatar src={detail.album_file} />
        <Name>{petName}</Name>
        <KindText>{animal_Variety.trim()}</KindText>
        <LearnMore as='button'>
          <SexWrap>
            <FontAwesomeIcon icon={sex.icon} color={sex.color} />
            <SexText>{sex.text}</SexText>
          </SexWrap>
          <Bar />
          <AgeText>{age}</AgeText>
        </LearnMore>
      </CardContainer>
    </OuterHoverWrap>
  )
}

export default Card
