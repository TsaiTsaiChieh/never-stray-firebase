import { styled } from '@linaria/react'

import { colors, LG } from '.'
import { Contain } from './Base'

export const Wrapper = styled.div`
  padding: 5px 0;
  border-bottom: 3px solid ${colors['primary-100']};
`
export const Container = styled(Contain)`
  ${LG} {
    justify-content: space-between;
  }
`
export const Logo = styled.img`
  content: url("/logo.svg");
`
export const AvatarWrap = styled.div`
  display: flex;
  position: absolute;
  right: 4px;
  ${LG} {
    position: relative;
    right: 0;
  }
`
export const Avatar = styled.div`
  width: 34px;
  height: 34px;
  border: 2px solid ${colors['primary-100']};
  border-radius: 50%;
  margin-right: 8px;
`
export const AuthState = styled.button`
  color: ${colors['gray-i200']};
  margin: auto 0;
  font-size: 16px;
`
