import { styled } from '@linaria/react'

import { LG, MD } from '.'

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
`
