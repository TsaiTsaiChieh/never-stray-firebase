import { styled } from '@linaria/react'

import { colors, MD } from '..'

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
  animation: 1000ms pawAnimation ease-in-out infinite;
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
    animation-delay: 0.75s;
  }
  &:nth-child(3) {
    animation-delay: 1s;
  }
  &:nth-child(2) {
    animation-delay: 1.25s;
  }
  &:nth-child(1) {
    animation-delay: 1.5s;
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
