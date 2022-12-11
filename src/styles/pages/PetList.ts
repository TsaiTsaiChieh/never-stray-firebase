import { styled } from '@linaria/react'

import { colors, MD } from '..'
import { Contain, FlexCenter } from '../Base'

export const Container = styled(Contain)``
export const PetContainer = styled.div`
  margin-top: 100px;
  display: grid;
  row-gap: 100px;
  grid-template-columns: repeat(2, 1fr);
  ${MD} {
    grid-template-columns: repeat(3, 1fr);
  }
`
// Card
export const CardContainer = styled(FlexCenter)`
  width: 225px;
  position: relative;
  background: ${colors.white};
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 0px 8px ${colors['gray-t50']};
`
export const PetImgWrap = styled.div`
width: 160px;
  position: absolute;
  bottom: 170px;
`
export const Paw = styled.img`
content: url('/images/paw.svg');
position: absolute;
top: -21px;
right: 32px;
`
export const PetImg = styled.div`
  /* width: 160px; */
  /* position: absolute; */
  bottom: 170px;
  height: 152px;
  -webkit-mask: url("images/pet-mask.svg") no-repeat center center;
  mask: url("images/pet-mask.svg") no-repeat center center;
  background-image: ${(props) => `url(${props.src || '/images/pet-null.svg'})`};
  background-size: cover;
  &::before {
    content: "";
    display: ${(props) => (props.loading ? 'block' : 'none')};
    position: absolute;
    height: 100%;
    width: 160px;
    background: linear-gradient(
      to right,
      transparent 0%,
      ${colors.white} 50%,
      transparent 100%
    );
    animation: load 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  @keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }
`
export const Name = styled.h3`
  width: 100%;
  text-align: center;
  color: ${colors['gray-i200']};
  position: relative;
  font-size: 15px;
  letter-spacing: 0.1em;
  font-weight: bold;
  margin-top: 100px;
  margin-bottom: 10px;
  &::before {
    top: 20px;
    content: "";
    position: absolute;
    width: 50px;
    background: ${colors['primary-100']};
    margin: 0 auto;
    left: 0;
    right: 0;
    border-radius: 10px;
    border-bottom: 3px solid ${colors['primary-100']};
  }
`
export const KindText = styled.span`
  font-size: 12px;
  color: ${colors['gray-i100']};
  margin-bottom: 35px;
`
export const LearnMore = styled(FlexCenter)`
  width: 190px;
  height: 50px;
  border-radius: 10px;
  font-size: 15px;
  color: ${colors['gray-i150']};
  padding: 10px 20px 10px 15px;
  background: ${colors['primary-10']};
  margin: 0 5px 15px;
`
export const SexWrap = styled(FlexCenter)`
  letter-spacing: 0.1em;
`
export const SexText = styled.span``
export const Bar = styled.div`
  height: 31px;
  border-left: 2px solid ${colors['primary-30']};
  width: auto;
  margin: 0 15px;
`
export const AgeText = styled.span``
export const OuterHoverWrap = styled.div`
  width: 245px;
  padding: 9px;
  border-radius: 5px;
  border: 1px solid transparent;
  &:hover {
    background: ${colors['primary-20']};
    box-shadow: 0px 0px 8px ${colors['gray-t50']};
    border: 1px solid ${colors['primary-50']};
    ${LearnMore} {
      background: ${colors['primary-150']};
      color: ${colors['primary-200']};
      transition: all 0.8s ease;
    }
    ${SexWrap}, ${AgeText} {
      display: none;
    }
    ${Bar} {
      border: none;
      height: auto;
    }
    ${Bar}::before {
      content: "瞭解我多一點";
      letter-spacing: 0.1em;
      font-size: 14px;
    }
    ${PetImg} {
      -webkit-filter: brightness(75%);
      transition: all 0.8s ease;
    }
  }
`
