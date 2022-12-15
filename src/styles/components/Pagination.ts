import { styled } from '@linaria/react'

import { colors } from '..'

export const PageWrapper = styled.div`
  margin: 20px 0;
  width: 95%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
`
export const LeftWrap = styled.div`
  display: flex;
  gap: 15px;
`
export const RightWrap = styled(LeftWrap)`
  display: flex;
`
export const PageButton = styled.button`
  cursor: pointer;
  svg {
    color: ${colors['gray-i200']};
    font-size: 20px;
  }
  &.disabled {
    svg {
      color: ${colors['gray-i150']};
    }
  }
`
export const PageInput = styled.input`
  width: 80px;
  text-align: center;
  font-size: 16px;
  color: ${colors.white};
  padding: 5px 10px;
  border: 2px ${colors['gray-i200']} solid;
  background: ${colors['primary-50']};
  border: none;
  cursor: pointer;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  &:focus {
    border: none;
  }
`
