import { styled } from '@linaria/react'

import {
 alpha, colors, MD, shadow,
} from '..'
import { FlexCenter } from '../Base'

export const Mask = styled(FlexCenter)<{ $visible: boolean }>`
  display: ${(props) => (props.$visible ? 'flex' : 'none')};
  z-index: 100;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  margin: auto;
  background: ${alpha.gray1};
`
export const Frame = styled(FlexCenter)`
  flex-direction: column;
  position: absolute;
  margin: auto;
  padding: 40px 120px;
  border: 5px solid ${colors.secondary};
  border-radius: 5px;
  box-shadow: ${shadow.modal};
  background: ${colors.white};
  text-align: center;
  ${MD} {
    padding: 40px 140px;
  }
`
export const Loader = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid ${colors.primaryLighten};
  border-bottom-color: ${colors.secondary};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  margin-bottom: 20px;
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
export const Title = styled.h2`
  color: ${colors.secondary};
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.04rem;
`
export const Content = styled.p`
  font-size: 15px;
  color: ${colors.gray3};
  letter-spacing: 0.01rem;
  margin-top: 8px;
`
