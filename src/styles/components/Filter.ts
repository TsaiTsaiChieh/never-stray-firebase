import { styled } from '@linaria/react'
import Select from 'react-select'

import {
 alpha, colors, filters, LG, MD, shadow, SM, XL,
} from '..'
import { FlexCenter } from '../Base'

export const FilterContainer = styled(FlexCenter)<{
  $visible: boolean
  $scrolled: boolean
}>`
  width: 100%;
  height: ${(props) => (props.$scrolled ? 'calc(100vh - 57px)' : 'calc(100vh - 106px)')};
  top: ${(props) => (props.$scrolled ? '57px' : '101px')};
  display: ${(props) => (props.$visible ? 'flex' : 'none')};
  box-shadow: ${shadow.filter};
  border-radius: 5px;
  color: ${colors.gray3};
  flex-direction: column;
  row-gap: 10px;
  background: ${colors.white};
  z-index: 100;
  position: sticky;
  overflow-y: auto;
  overflow-x: hidden;
  ${SM} {
    height: ${(props) => (props.$scrolled ? 'calc(100vh - 62px)' : 'calc(100vh - 98px)')};
    top: ${(props) => (props.$scrolled ? '62px' : '98px')};
  }
  ${MD} {
    width: auto;
    row-gap: 25px;
    position: ${(props) => (props.$scrolled ? 'fixed' : 'absolute')};
    height: ${(props) => (props.$scrolled ? 'calc(100vh - 53px)' : 'calc(100vh - 109px)')};
    z-index: 10;
    left: 0;
    padding: 45px 35px 50px 35px;
    right: auto;
  }
  ${XL} {
    height: 100%;
    position: ${(props) => (props.$scrolled ? 'sticky' : 'relative')};
    top: ${(props) => (props.$scrolled ? '120px' : 'auto')};
    display: flex;
    margin-top: 44px;
  }
`
export const FilterIconWrap = styled.div`
  display: none;
  width: 100%;
  margin-bottom: 20px;
  position: sticky;
  span {
    color: ${colors.gray6};
  }
  ${XL} {
    display: flex;
  }
`
export const FilterIcon = styled.img`
  content: url("/images/filter.svg");
  width: 16px;
  height: 16px;
  filter: ${filters.gray6};
  margin-right: 5px;
`
export const OptionsFilterWrap = styled.div`
  width: 279px;
  display: flex;
  flex-direction: column;
`
export const LabelName = styled.label`
  margin-bottom: 8px;
  margin-left: 2px;
  letter-spacing: 0.05em;
  font-size: 15px;
  color: ${colors.gray3};
`
export const OptionGroup = styled.div`
  justify-content: space-between;
  display: flex;
`
export const OptionBtn = styled.button`
  font-size: 14px;
  width: 80px;
  height: 40px;
  letter-spacing: 0.05em;
  border-radius: 5px;
`
export const OptionBtnOuter = styled(FlexCenter)`
  width: 84px;
  height: 44px;
  border-radius: 5px;
  &:hover {
    background-color: ${alpha.primary};
    ${OptionBtn} {
      border: 1px solid ${colors.primary};
    }
  }
  /* active */
  ${OptionBtn} {
    background: ${(props) => (props.$active ? colors.primary : colors.white)};
    color: ${(props) => (props.$active ? colors.white : colors.gray3)};
    border: ${(props) => (props.$active
        ? `1px solid ${colors.primary}`
        : `1px solid ${colors.gray7}`)};
  }
`
export const Selector = styled(Select)`
  width: 275px;
  .Select__control {
    border: 1px solid ${colors.gray7};
    height: 40px;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 0.05em;
  }
  .Select__placeholder {
    color: ${colors.gray4};
  }
  .Select__single-value {
    color: ${colors.gray3};
  }
  .Select__control--is-focused {
    box-shadow: 0 0 0 1px ${alpha.primary};
    border: 1px solid ${colors.primary};
  }
  .Select__control--menu-is-open {
    svg {
      transform: rotate(180deg);
      transition: all 0.4s;
    }
  }
  .Select__option {
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 0.05em;
    color: ${colors.gray3};
    background: white;
    &:hover {
      background: ${colors.light};
    }
  }
`
export const SelectOuter = styled(OptionBtnOuter)`
  width: 279px;
  &:hover {
    ${Selector} {
      .Select__control {
        border: 1px solid ${colors.primary};
      }
    }
  }
`
export const TextSearch = styled.input`
  width: 90%;
  border-radius: 5px;
  border: 1px solid ${colors.gray7};
  font-size: 14px;
  line-height: 36px;
  letter-spacing: 0.05em;
  color: ${colors.gray3};
  padding-left: 10px;
  &::placeholder {
    color: ${colors.gray6};
  }
  &:focus {
    outline: none;
  }
  ${MD} {
    width: 146px;
  }
`
export const ClearIcon = styled.img`
  content: url("/images/circle-xmark.svg");
  cursor: pointer;
  position: absolute;
  right: 12px;
  filter: ${filters.gray7};
  width: 16px;
  height: 16px;
  &:hover {
    filter: ${filters.gray5};
  }
`
export const TextSearchOuter = styled(OptionBtnOuter)`
  height: 43px;
  width: calc(100% + 8px);
  position: relative;
  &:hover {
    ${TextSearch} {
      border: 1px solid ${colors.primary};
    }
  }
  ${MD} {
    width: 69%;
  }
`
export const ResetBtnWrap = styled(OptionsFilterWrap)`
  ${LG} {
    position: absolute;
    top: 43px;
    right: -150px;
  }
`
export const ResetBtn = styled(OptionBtn)`
  width: 90px;
`
export const ResetBtnOuter = styled(OptionBtnOuter)`
  width: 94px;
  &:hover {
    background: ${alpha.pink};
    ${ResetBtn} {
      border-color: ${colors.pink};
    }
  }
`
export const TextFilterWrap = styled(FlexCenter)`
  width: 50%;
  ${MD} {
    justify-content: flex-start;
    margin-left: 10px;
    margin-right: 0;
    padding-right: 0;
    width: 36%;
  }
`
export const TextLabelName = styled(LabelName)`
  display: none;
  width: 80px;
  margin: auto 5px auto 0;
  ${MD} {
    display: block;
  }
`
export const SubFilterWrap = styled(FlexCenter)`
  width: 346px;
  background: ${colors.white};
  box-shadow: ${shadow.filter};
  margin-bottom: 10px;
  padding: 10px;
  gap: 10px;
  border-radius: 5px;
  ${MD} {
    width: 682px;
    justify-content: flex-start;
    margin-bottom: 25px;
  }
`
export const LikeBtnOuter = styled(OptionBtnOuter)`
  height: 43px;
  width: calc(50% + 8px);
  ${MD} {
    width: 164px;
  }
`
export const LikeBtn = styled(OptionBtn)`
  width: 98.5%;
  ${MD} {
    width: 160px;
  }
`
