import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as i18n from 'i18next'

import {
 AuthState, AvatarWrap, Container, Logo, Wrapper,
} from '../styles/components/Header'

export const Header = () => (
  <Wrapper>
    <Container className='flex-center'>
      <Logo />
      <AvatarWrap>
        <FontAwesomeIcon icon={faGoogle} />
        <AuthState>{i18n.t('buttons.login')}</AuthState>
      </AvatarWrap>
    </Container>
  </Wrapper>
)

export default Header
