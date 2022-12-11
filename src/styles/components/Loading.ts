import { styled } from '@linaria/react'

import { colors } from '../index'

export const CatLoadingWrap = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100vw;
  height: 100%;
  background: ${colors['gray-t100']};
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  svg {
    width: 250px !important;
  }
`
