import {
 AuthState, Avatar, AvatarWrap, Container, Logo, Wrapper,
} from '../styles/Header'

export const Header = () => (
  <Wrapper>
    <Container className='flex-center'>
      <Logo />
      <AvatarWrap>
        <Avatar />
        <AuthState>登入</AuthState>
      </AvatarWrap>
    </Container>
  </Wrapper>
)

export default Header
