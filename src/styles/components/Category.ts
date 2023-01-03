import { styled } from '@linaria/react'

import {
 colors, MD, SM, XL,
} from '..'
import { Contain, FlexCenter } from '../Base'

export const Wrapper = styled.nav`
  padding: 10px 0;
  background: ${colors['primary-10']};
`
export const Container = styled(Contain)`
  gap: 12px;
`
export const FilterIconWrap = styled(FlexCenter)`
  cursor: pointer;
  position: absolute;
  top: 7px;

  svg {
    color: ${colors['primary-100']};
    width: 18px;
    height: 18px;
    ${SM} {
      width: 20px;
      height: 20px;
    }
  }
  ${XL} {
    display: none;
  }
`
export const FilterText = styled.span`
  font-size: 14px;
  color: ${colors['primary-100']};
  letter-spacing: 0.05em;
  ${SM} {
    font-size: 15px;
  }
`
export const ButtonWrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  ${SM} {
    border-radius: 10px;
  }
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
  span {
    letter-spacing: 0.05em;
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
  font-size: 14px;
  color: ${colors['gray-i200']};
  padding: 8px 4px;
  ${SM} {
    font-size: 15px;
    padding: 8px 4px;
  }
`
