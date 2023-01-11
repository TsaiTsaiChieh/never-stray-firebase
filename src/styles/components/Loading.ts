import { styled } from '@linaria/react'

import { colors, MD } from '..'
import { FlexCenter } from '../Base'

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
export const PawLoaderWrap = styled.div<{ $visible: boolean }>`
  display: ${(props) => (props.$visible ? 'flex' : 'none')};
  height: 100%;
  width: 120px;
  margin: auto;
  top: 0;
  bottom: 0;
  position: absolute;
  align-items: center;
  justify-content: center;
  #svg-sprite {
    position: absolute;
  }
`
export const PawLoader = styled.div`
  font-size: 60px;
  width: 1.2em;
  ${MD} {
    transform: rotate(90deg) translate(-50%, 0%);
  }
`
export const Paw = styled.svg`
  width: 100%;
  height: 100%;
  animation: 800ms pawAnimation ease-in-out infinite;
  opacity: 0;
  svg {
    width: 100%;
    height: 100%;
    fill: ${colors['primary-100']};
  }
  &:nth-child(odd) {
    transform: rotate(-20deg);
  }
  &:nth-child(even) {
    transform: rotate(10deg) translate(125%, 0);
  }
  &:nth-child(4) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  &:nth-child(2) {
    animation-delay: 0.6s;
  }
  &:nth-child(1) {
    animation-delay: 0.8s;
  }
  .no-cssanimations & {
    opacity: 1;
  }
  @keyframes pawAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`
export const MainLoadingContainer = styled(FlexCenter)<{ $visible: boolean }>`
  display: ${(props) => (props.$visible ? 'flex' : 'none')};
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #c4f1db 0%, #b9eff2 100%);
  flex-direction: column;
`
export const Sparkles = styled.g`
  & > path {
    animation: sparklyBits 1000ms infinite;
    position: absolute;
  }
  & > path:nth-child(1) {
    animation-delay: 0ms;
  }
  & > path:nth-child(2) {
    animation-delay: 35ms;
  }
  & > path:nth-child(3) {
    animation-delay: 70ms;
  }
  & > path:nth-child(4) {
    animation-delay: 105ms;
  }
  & > path:nth-child(5) {
    animation-delay: 140ms;
  }
  & > path:nth-child(6) {
    animation-delay: 175ms;
  }
  & > path:nth-child(7) {
    animation-delay: 210ms;
  }
  & > path:nth-child(8) {
    animation-delay: 245ms;
  }
  & > path:nth-child(9) {
    animation-delay: 280ms;
  }
  & > path:nth-child(10) {
    animation-delay: 315ms;
  }
  & > path:nth-child(11) {
    animation-delay: 350ms;
  }
  & > path:nth-child(12) {
    animation-delay: 385ms;
  }
  & > path:nth-child(13) {
    animation-delay: 420ms;
  }
  & > path:nth-child(14) {
    animation-delay: 455ms;
  }
  & > path:nth-child(15) {
    animation-delay: 490ms;
  }
  & > path:nth-child(16) {
    animation-delay: 525ms;
  }
  & > path:nth-child(17) {
    animation-delay: 560ms;
  }
  & > path:nth-child(18) {
    animation-delay: 595ms;
  }
  & > path:nth-child(19) {
    animation-delay: 630ms;
  }
  & > path:nth-child(20) {
    animation-delay: 665ms;
  }
  & > path:nth-child(21) {
    animation-delay: 700ms;
  }
  & > path:nth-child(22) {
    animation-delay: 735ms;
  }
  & > path:nth-child(23) {
    animation-delay: 770ms;
  }
  & > path:nth-child(24) {
    animation-delay: 805ms;
  }
  & > path:nth-child(25) {
    animation-delay: 840ms;
  }
  & > path:nth-child(26) {
    animation-delay: 875ms;
  }
  & > path:nth-child(27) {
    animation-delay: 910ms;
  }
  & > path:nth-child(28) {
    animation-delay: 945ms;
  }
  & > path:nth-child(29) {
    animation-delay: 980ms;
  }
  @keyframes sparklyBits {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
export const Logo = styled.img`
  position: absolute;
  top: 50%;
  bottom: 50%;
  margin: auto;
  margin-bottom: -20px;
  width: 80px;
  height: 80px;
  content: url("/images/logo.svg");
`
export const LoadingText = styled.span`
  margin-top: 15px;
  margin-left: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.08rem;
`
