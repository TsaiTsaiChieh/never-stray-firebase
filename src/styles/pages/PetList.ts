import { styled } from '@linaria/react'

import {
 alpha, colors, filters, MD, shadow, SM, XL,
} from '..'
import { Contain, FlexCenter } from '../Base'

export const Container = styled(Contain)`
  position: static;
  width: 100%;
  ${XL} {
    display: flex;
    justify-content: space-evenly;
  }
`
export const SubFilterAndPetsWrap = styled(FlexCenter)`
  flex-direction: column;
  ${XL} {
    margin-left: 20px;
  }
`
export const Banner = styled.img`
  width: 366px;
  content: url("/images/donate.svg");
  margin: 16px 0 28px;
  ${MD} {
    width: 702px;
    margin: 20px 0 30px;
  }
`
export const PetsAndPage = styled(FlexCenter)`
  flex-direction: column;
  ${XL} {
    min-width: 720px;
    width: 720px;
  }
`
export const PetContainer = styled.div<{ $small: boolean }>`
  position: relative;
  margin-top: 100px;
  justify-content: center;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: ${(props) => (props.$small ? 'repeat(6, auto)' : 'repeat(9, auto)')};
  grid-row-start: auto;
  grid-row-gap: 85px;
  ${SM} {
    grid-row-gap: 110px;
  }
  ${MD} {
    grid-template-columns: repeat(3, auto);
    grid-template-rows: ${(props) => (props.$small ? 'repeat(4, auto)' : 'repeat(6, auto)')};
  }
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
  box-shadow: ${shadow.card};
`
export const PetImgWrap = styled.div`
  position: absolute;
  bottom: 124px;
  ${SM} {
    bottom: 115px;
  }
  ${MD} {
    bottom: 170px;
  }
`
export const Paw = styled.img`
  width: 120px;
  top: -18px;
  right: 10px;
  content: url("/images/paw.svg");
  filter: ${filters.primary};
  position: absolute;
  ${SM} {
    top: -26px;
    right: 18px;
  }
  ${MD} {
    width: 140px;
    top: -25px;
    right: 26px;
  }
`
export const Like = styled.img<{ $fill: boolean }>`
  display: none;
  content: ${(props) => (props.$fill ? "url('/images/heart-fill.svg')" : "url('/images/heart.svg')")};
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 10;
  filter: ${(props) => (props.$fill ? filters.red : filters.white)};
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
export const PetImg = styled.div<{ $loading: boolean; src: string }>`
  width: 100px;
  height: 100px;
  ${SM} {
    width: 130px;
    height: 120px;
  }
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
    width: 100%;
    height: 100%;
    display: ${(props) => (props.$loading ? 'block' : 'none')};
    position: absolute;
    background: linear-gradient(
      to right,
      transparent 0%,
      ${colors.white} 50%,
      transparent 100%
    );
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  @keyframes load {
    from {
      left: -100px;
    }
    to {
      left: 55px;
    }
  }
`
export const ID = styled.span`
  display: none;
  ${MD} {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    width: 50px;
    height: 13px;
    margin: auto;
    text-align: center;
    color: ${colors.gray5};
    margin-bottom: 10px;
    font-size: 13px;
    &::before {
      content: "#";
    }
  }
`
export const Name = styled.span`
  width: 100%;
  text-align: center;
  color: ${colors.gray3};
  position: relative;
  font-size: 15px;
  letter-spacing: 0.05em;
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
    width: 45px;
    background: ${colors.primary};
    margin: 0 auto;
    left: 0;
    right: 0;
    border-bottom: 3px solid ${colors.primary};
  }
`
export const KindText = styled.span`
  font-size: 12px;
  color: ${colors.gray6};
  margin-top: 3px;
  margin-bottom: 15px;
  ${MD} {
    margin-bottom: 35px;
  }
`
export const LearnMore = styled(FlexCenter)`
  width: 100px;
  height: 32px;
  border-radius: 10px;
  font-size: 13px;
  color: ${colors.gray4};
  background: ${colors.light};
  margin: 0 15px 15px;
  ${SM} {
    height: 35px;
    width: 138px;
    font-size: 14px;
  }
  ${MD} {
    width: 190px;
    height: 50px;
    font-size: 15px;
  }
`
export const SexWrap = styled(FlexCenter)`
  letter-spacing: 0.05em;
  gap: 2px;
  width: 52%;
  ${MD} {
    gap: 5px;
  }
`
export const SexIcon = styled.img<{ $content: string; filter: string }>`
  content: ${(props) => `url(${props.$content})`};
  width: 13px;
  height: 15px;
  filter: ${(props) => props.filter};
  padding: 0;
  ${MD} {
    width: 16px;
    height: 18px;
  }
`
export const SexText = styled.span``
export const Bar = styled.div`
  width: 2%;
  height: 16px;
  border-left: 2px solid ${colors.gray9};
  ${SM} {
    margin: 0 8px;
  }
  ${MD} {
    height: 31px;
  }
`
export const AgeText = styled.span`
  width: 46%;
`
export const OuterHoverWrap = styled.div`
  padding: 5px;
  ${SM} {
    padding: 9px;
  }
  border-radius: 5px;
  border: 1px solid transparent;
  &:hover {
    background: ${colors.light};
    box-shadow: 0px 0px 8px ${alpha.gray3};
    border: 1px solid ${colors.primary};
    ${LearnMore} {
      background: ${colors.primaryLighten};
      color: ${colors.secondary};
      transition: all 0.8s ease;
    }
    ${SexWrap}, ${AgeText} {
      display: none;
    }
    ${Bar} {
      width: 100%;
      border: none;
      height: auto;
    }
    ${Bar}::before {
      content: "瞭解我多一點";
      letter-spacing: 0.05em;
      font-size: 10px;
      ${SM} {
        font-size: 14px;
      }
      ${MD} {
        font-size: 16px;
      }
    }
    ${PetImg} {
      -webkit-filter: brightness(75%);
      transition: all 0.8s ease;
    }
    ${Like} {
      display: block;
    }
  }
  // loading
  &.loading {
    & {
      pointer-events: none;
    }
    ${Paw} {
      filter: ${filters.gray8};
    }
    ${PetImg} {
      -webkit-filter: brightness(95%);
    }
    ${Name} {
      width: 50px;
      height: 15px;
    }
    ${KindText} {
      width: 70px;
      height: 12px;
    }
    ${Name}, ${KindText}, ${LearnMore}, ${ID} {
      background-image: linear-gradient(
        90deg,
        ${colors.gray8} 25%,
        ${colors.white} 37%,
        ${colors.gray8} 63%
      );
      background-position-x: 180%;
      background-size: 400% 100%;
      animation: loading 2s ease-in-out infinite;
    }
    ${ID} {
      &::before {
        content: "";
      }
    }
  }
  @keyframes loading {
    to {
      background-position-x: 20%;
    }
  }
`
