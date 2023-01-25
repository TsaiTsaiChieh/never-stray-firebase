import { styled } from '@linaria/react'

import {
 alpha, colors, filters, MD, shadow,
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
  padding: 40px 50px;
  border: 5px solid ${colors.secondary};
  border-radius: 5px;
  box-shadow: ${shadow.modal};
  background: ${colors.white};
  text-align: center;
  ${MD} {
    padding: 40px 100px;
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
  line-height: 1.4;
`
export const Content = styled.p`
  font-size: 15px;
  color: ${colors.gray3};
  letter-spacing: 0.01rem;
  margin-top: 8px;
  line-height: 1.4;
`
export const WarningIcon = styled.img`
  content: url("/images/warning.svg");
  z-index: 10;
  width: 70px;
  margin-bottom: 20px;
`
export const BtnWrap = styled(FlexCenter)`
  margin-top: 25px;
`

export const BtnOuter = styled(FlexCenter)`
  width: 114px;
  height: 50px;
  border-radius: 5px;
  &:hover {
    background-color: ${alpha.primary};
  }
`
export const ConfirmBtn = styled.button`
  width: 110px;
  font-size: 14px;
  height: 46px;
  letter-spacing: 0.05rem;
  padding: 12px 20px;
  color: ${colors.gray1};
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  background: ${colors.white};
`
export const XMark = styled.img`
  width: 25px;
  position: absolute;
  top: 5px;
  right: 13px;
  content: url("/images/xmark.svg");
  cursor: pointer;
  filter: ${filters.gray2};
  &:hover {
    filter: ${filters.primary};
  }
`
