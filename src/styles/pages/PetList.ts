import { styled } from '@linaria/react'

import { colors, MD, XL } from '..'
import { Contain, FlexCenter } from '../Base'

export const Container = styled(Contain)`
  ${XL} {
    display: flex;
    justify-content: space-evenly;
  }
`
export const PetsAndPage = styled(FlexCenter)`
/* width: 720px; */
  flex-direction: column;
`
export const PetContainer = styled.div`
  margin-top: 100px;
  justify-content: center;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(9, auto);
  grid-row-start: auto;
  grid-row-gap: 100px;
  ${MD} {
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(6, auto);
  }
`
export const NotFoundWrap = styled(FlexCenter)`
  width: 720px;
`
export const NotFound = styled.img`
  content: url("/images/not-found.png");
`
// Card
export const CardContainer = styled(FlexCenter)`
  position: relative;
  background: ${colors.white};
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 0px 8px ${colors['gray-t50']};
`
export const PetImgWrap = styled.div`
  position: absolute;
  bottom: 120px;
  ${MD} {
    bottom: 170px;
  }
`
export const Paw = styled.img`
  width: 120px;
  top: -24px;
  right: 18px;
  content: url("/images/paw.svg");
  position: absolute;
  ${MD} {
    width: 140px;
    top: -25px;
    right: 26px;
  }
`
export const Mask = styled.div`
  object-fit: cover;
  width: 110px;
  height: 6.5rem;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: ${(props) => `url(${props.src || '/images/pet-null.svg'})`};
  -webkit-mask: url("/images/pet-mask.svg") no-repeat center center;
  mask: url("/images/pet-mask.svg") no-repeat center center;
  -webkit-mask-size: contain;
  mask-size: contain;
`
export const PetImg = styled.div`
  height: 120px;
  width: 130px;
  ${MD} {
    width: 160px;
    height: 152px;
  }
  -webkit-mask: url("/images/pet-mask.svg") no-repeat center center;
  mask: url("/images/pet-mask.svg") no-repeat center center;
  background-image: ${(props) => `url(${props.src || '/images/pet-null.svg'})`};
  background-size: cover;
  -webkit-mask-size: contain;
  mask-size: contain;
  &::before {
    content: "";
    display: ${(props) => (props.$loading ? 'block' : 'none')};
    position: absolute;
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
  margin-top: 70px;
  margin-bottom: 10px;
  ${MD} {
    margin-top: 100px;
  }
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
  margin-bottom: 15px;
  ${MD} {
    margin-bottom: 35px;
  }
`
export const LearnMore = styled(FlexCenter)`
  width: 142px;
  height: 32px;
  border-radius: 10px;
  font-size: 14px;
  color: ${colors['gray-i150']};
  background: ${colors['primary-10']};
  margin: 0 15px 15px;
  ${MD} {
    width: 190px;
    height: 50px;
    font-size: 15px;
  }
`
export const SexWrap = styled(FlexCenter)`
  letter-spacing: 0.1em;
`
export const SexText = styled.span``
export const Bar = styled.div`
  height: 16px;
  border-left: 2px solid ${colors['primary-30']};
  width: auto;
  margin: 0 8px;
  ${MD} {
    height: 31px;
    margin: 0 15px;
  }
`
export const AgeText = styled.span``
export const OuterHoverWrap = styled.div`
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
