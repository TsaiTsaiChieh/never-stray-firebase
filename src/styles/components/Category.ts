import { styled } from '@linaria/react'

import {
 colors, filters, MD, SM, XL,
} from '..'
import { Contain, FlexCenter } from '../Base'

export const Wrapper = styled.nav<{ $scrolled: boolean }>`
  width: 100%;
  padding: 10px 0;
  z-index: 15;
  background: ${colors.light};
  position: ${(props) => (props.$scrolled ? 'fixed' : 'relative')};
  transition: 0.35s ease-in-out;
  top: ${(props) => (props.$scrolled ? 0 : 'auto')};
  padding: ${(props) => (props.$scrolled ? '12px 0' : '10px 0')};
  border-bottom: ${(props) => (props.$scrolled ? `3px solid ${colors.primary}` : '3px solid transparent')};
`
export const Container = styled(Contain)`
  gap: 12px;
`
export const FilterIconWrap = styled(FlexCenter)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  bottom: 50%;
  ${XL} {
    display: none;
  }
`
export const FilterIcon = styled.img`
  content: url("/images/filter.svg");
  width: 18px;
  height: 18px;
  filter: ${filters.primary};
  ${SM} {
    width: 20px;
    height: 20px;
  }
`
export const FilterText = styled.span`
  font-size: 14px;
  color: ${colors.primary};
  letter-spacing: 0.05em;
  ${SM} {
    font-size: 15px;
  }
`
export const CategoryWrap = styled(FlexCenter)`
  gap: 4px;
  ${MD} {
    gap: 15px;
  }
  ${XL} {
    gap: 35px;
  }
`
export const CategoryIcon = styled.img<{ $content: string }>`
  display: none;
  ${SM} {
    margin-right: 3px;
    display: block;
    width: 22px;
    height: 22px;
    content: ${(props) => `url(${props.$content})`};
    filter: ${filters.secondary};
  }
  ${MD} {
    width: 24px;
    height: 24px;
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
  span {
    letter-spacing: 0.05em;
  }
  &.active {
    background: ${colors.primary};
    span {
      color: ${colors.white};
    }
    ${CategoryIcon} {
      filter: ${filters.white};
    }
  }
  &:hover {
    background: ${colors.primaryLighten};
    span {
      color: white;
    }
    ${CategoryIcon} {
      filter: ${filters.white};
    }
  }
`
export const CategoryName = styled.span`
  font-size: 14px;
  color: ${colors['gray-i200']};
  padding: 4px 2px;
  ${SM} {
    font-size: 15px;
    padding: 6px 2px;
  }
  ${MD} {
    padding: 8px 4px;
  }
`
