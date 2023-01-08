import { styled } from '@linaria/react'

import { colors, LG, SM } from '..'
import { Contain, FlexCenter } from '../Base'

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
  width: 136px;
  height: 40px;
  content: url("/logo.svg");
  cursor: pointer;
`
export const AvatarWrap = styled(FlexCenter)`
  gap: 1px;
  position: absolute;
  right: 0;
  ${SM} {
    right: 4px;
  }
  ${LG} {
    position: relative;
    right: 0;
  }
  svg {
    width: 20px;
    height: 20px;
    color: ${colors['primary-100']};
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
  font-size: 14px;
  ${SM} {
    font-size: 15px;
  }
`
