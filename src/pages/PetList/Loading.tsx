import {
  CardContainer,
  KindText,
  LearnMore,
  Name,
  OuterHoverWrap,
} from '../../styles/pages/PetList'
import Avatar from './Avatar'

const Loading = () => (
  <OuterHoverWrap className='loading'>
    <CardContainer>
      <Avatar src='null' />
      <Name />
      <KindText />
      <LearnMore />
    </CardContainer>
  </OuterHoverWrap>
  )

export default Loading
