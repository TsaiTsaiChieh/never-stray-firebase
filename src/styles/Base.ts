import { styled } from '@linaria/react'

import { LG, MD, XL } from '.'

export const Contain = styled.div`
  max-width: 576px;
  width: 90%;
  margin: auto;
  position: relative;

  &.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${MD} {
    max-width: 820px;
    width: 85%;
  }

  ${LG} {
    max-width: 1140px;
    width: 80%;
  }
`
export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => `${props.gap || 8}px`};
  ${XL} {
    gap: ${(props) => `${props.xlGap || 10}px`};
  }
`
