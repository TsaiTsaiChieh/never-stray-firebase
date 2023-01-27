import * as i18n from 'i18next'

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
  content?: React.ReactElement | string
  confirmAction: ()=> void
}
const ConfirmModal = ({
 visible, title, content, confirmAction,
}: Props) => (
  <Mask $visible={visible}>
    <Frame>
      <XMark onClick={confirmAction} />
      <WarningIcon alt='warning' />
      {title ? <Title>{title}</Title> : null}
      {content ? <Content>{content}</Content> : null}
      <BtnWrap>
        <BtnOuter>
          <ConfirmBtn onClick={confirmAction}>{i18n.t('buttons.understand')}</ConfirmBtn>
        </BtnOuter>
      </BtnWrap>
    </Frame>
  </Mask>
  )

export default ConfirmModal
