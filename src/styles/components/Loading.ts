import { styled } from '@linaria/react'

export const CatLoadingWrap = styled.div`
  height: 100%;
  margin: auto;
  top: 0;
  bottom: 0;
  position: absolute;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 30;
  svg {
    width: 250px !important;
  }
`
