import {
  Content,
 Frame, Loader, Mask, Title,
} from '../../styles/components/Modal'

interface Props {
  visible: boolean
  title?: string
  content?: string
}
const LoadingModal = ({ visible, title, content }: Props) => (
  <Mask $visible={visible}>
    <Frame>
      <Loader />
      {title ? <Title>{title}</Title> : null}
      {content ? <Content>{content}</Content> : null}
    </Frame>
  </Mask>
  )

export default LoadingModal
