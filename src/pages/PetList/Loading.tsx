import Avatar from './Avatar'
import {
  CardContainer,
  KindText,
  LearnMore,
  Name,
  OuterHoverWrap,
} from '../../styles/pages/PetList'

const Loading = () => (
  <OuterHoverWrap className='loading'>
    <CardContainer>
      <Avatar />
      <Name />
      <KindText />
      <LearnMore />
    </CardContainer>
  </OuterHoverWrap>
  )

export default Loading
