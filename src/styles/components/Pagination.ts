import { styled } from '@linaria/react'

import { colors } from '..'

export const PageWrapper = styled.div`
  margin: 20px 0;
  width: 95%;
  display: flex;
  justify-content: flex-end;
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
