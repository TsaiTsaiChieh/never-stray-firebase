import { useAppSelector } from '../store/hook'
import {
  Content,
 Frame, Loader, Mask, Title,
} from '../styles/components/Modal'

const Modal = () => {
  const { modalLoading } = useAppSelector((state) => state.loading)

  return (
    <Mask $visible={modalLoading.visible}>
      <Frame>
        <Loader />
        {modalLoading.title ? <Title>{modalLoading.title}</Title> : null}
        {modalLoading.content ? <Content>{modalLoading.content}</Content> : null}
      </Frame>
    </Mask>
  )
}

export default Modal
