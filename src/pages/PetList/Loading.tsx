import {
  CardContainer,
  KindText,
  LearnMore,
  Name,
  OuterHoverWrap,
} from '../../styles/pages/PetList'
import Avatar from './Avatar'

interface Props {
  loading: true
}
const Loading = ({ loading }: Props) => (
  <OuterHoverWrap className={loading && 'loading'}>
    <CardContainer>
      <Avatar src='null' />
      <Name />
      <KindText />
      <LearnMore />
    </CardContainer>
  </OuterHoverWrap>
  )

export default Loading
