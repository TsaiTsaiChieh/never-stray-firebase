import { styled } from '@linaria/react'

import { colors, MD } from '..'
import { Contain } from '../Base'

export const Wrapper = styled.nav`
  padding: 10px 0;
  background: ${colors['primary-10']};
`
export const Container = styled(Contain)`
  gap: 12px;
`
export const ButtonWrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  svg {
    display: none;
    ${MD} {
      display: block;
      color: ${colors['primary-200']};
      padding-left: 5px;
    }
    width: 24px;
    height: 24px;
  }

  &.active {
    background: ${colors['primary-100']};
    span {
      color: ${colors.white};
    }
    svg {
      color: ${colors.white};
    }
  }
  &:hover {
    background: ${colors['primary-150']};
    span {
      color: white;
    }
    svg {
      color: ${colors.white};
    }
  }
`
export const CategoryName = styled.span`
  font-size: 15px;
  color: ${colors['gray-i200']};
  padding: 8px 10px;
`
