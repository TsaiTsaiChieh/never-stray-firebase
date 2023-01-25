import * as i18n from 'i18next'

import { useAppDispatch } from '../../store/hook'
import { setOverLimitVisible } from '../../store/reducers/uiSlice'
import {
  BtnOuter,
  BtnWrap,
  ConfirmBtn,
  Content,
 Frame, Mask, Title, WarningIcon, XMark,
} from '../../styles/components/Modal'

interface Props {
  visible: boolean
  title?: string
  content?: React.ReactElement
}
const ConfirmModal = ({ visible, title, content }: Props) => {
  const dispatch = useAppDispatch()
  const closeModal = () => {
dispatch(setOverLimitVisible(false))
  }
  return (
    <Mask $visible={visible}>
      <Frame>
        <XMark onClick={closeModal} />
        <WarningIcon alt='warning' />
        {title ? <Title>{title}</Title> : null}
        {content ? <Content>{content}</Content> : null}
        <BtnWrap>
          <BtnOuter>
            <ConfirmBtn onClick={closeModal}>{i18n.t('buttons.understand')}</ConfirmBtn>
          </BtnOuter>
        </BtnWrap>
      </Frame>
    </Mask>
  )
}

export default ConfirmModal
