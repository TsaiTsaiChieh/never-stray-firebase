import { styled } from '@linaria/react'

import { colors } from '..'
import { FlexCenter } from '../Base'

export const MainLoadingContainer = styled(FlexCenter)<{ $visible: boolean }>`
  display: ${(props) => (props.$visible ? 'flex' : 'none')};
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background: linear-gradient(
    180deg,
    ${colors.primary} 0%,
    ${colors.primaryLighten} 100%
  );
  flex-direction: column;
`
export const Wrapper = styled.div`
  width: 200px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
export const Circle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.white};
  left: 15%;
  transform-origin: 50%;
  animation: circle 0.5s alternate infinite ease;
  &:nth-child(2) {
    left: 45%;
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
  animation: circle 0.5s alternate infinite ease;
  @keyframes circle {
    0% {
      top: 60px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }
    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }
    100% {
      top: 0%;
    }
  }
`
export const Shadow = styled.div`
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow 0.5s alternate infinite ease;
  &:nth-child(4) {
    left: 45%;
    animation-delay: 0.2s;
  }
  &:nth-child(5) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
  @keyframes shadow {
    0% {
      transform: scaleX(1.5);
    }
    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }
    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }
  }
`
export const LoadingText = styled.span`
  position: absolute;
  top: 90px;
  font-size: 20px;
  letter-spacing: 11px;
  color: ${colors.white};
  left: 15%;
  font-weight: bold;
`
