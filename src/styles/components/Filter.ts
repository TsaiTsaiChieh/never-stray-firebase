import { styled } from '@linaria/react'
import Select from 'react-select'

import { colors, XL } from '..'
import { FlexCenter } from '../Base'

export const FilterContainer = styled(FlexCenter)`
  height: fit-content;
  display: none;
  box-shadow: 0px 0px 8px ${colors['gray-t50']};
  border-radius: 5px;
  padding: 45px 22px 50px 22px;
  color: ${colors['gray-i200']};
  flex-direction: column;
  row-gap: 20px;
  ${XL} {
    display: flex;
  }
`
export const FilterIconWrap = styled.div`
  width: 100%;
  margin-bottom: 20px;
  svg {
    color: ${colors['gray-i50']};
    margin-right: 5px;
  }
  span {
    color: ${colors['gray-i150']};
  }
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
  color: ${colors['gray-i200']};
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
  color: ${colors['gray-i210']};
  border: 1px solid ${colors['gray-i40']};
  border-radius: 5px;
  background: ${colors.white};
`
export const OptionBtnOuter = styled(FlexCenter)`
  width: 84px;
  height: 44px;
  border-radius: 5px;
  &:hover {
    background-color: ${colors['primary-i52']};
    ${OptionBtn} {
      border: 1px solid ${colors['primary-100']};
    }
  }
  /* active */
  ${OptionBtn} {
    background: ${(props) => (props.$active ? colors['primary-100'] : colors.white)};
    color: ${(props) => (props.$active ? colors.white : colors['gray-i200'])};
    border: ${(props) => (props.$active
        ? `1px solid ${colors['primary-100']}`
        : `1px solid ${colors['gray-i40']}`)};
  }
`
export const Selector = styled(Select)`
  width: 275px;
  .Select__control {
    border: 1px solid ${colors['gray-i40']};
    height: 40px;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 0.05em;
  }
  .Select__placeholder {
    color: ${colors['gray-i50']};
  }
  .Select__single-value {
    color: ${colors['gray-i200']};
  }
  .Select__control--is-focused {
    box-shadow: 0 0 0 1px ${colors['primary-i52']};
    border: 1px solid ${colors['primary-50']};
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
    color: ${colors['gray-i200']};
    background: white;
    &:hover {
      background: ${colors['primary-20']};
    }
  }
`
export const SelectOuter = styled(OptionBtnOuter)`
  width: 279px;
  &:hover {
    ${Selector} {
      .Select__control {
        border: 1px solid ${colors['primary-100']};
      }
    }
  }
`
export const TextSearch = styled.input`
  width: 275px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${colors['gray-i40']};
  font-size: 14px;
  letter-spacing: 0.05em;
  color: ${colors['gray-i200']};
  padding-left: 10px;
  &::placeholder {
    color: ${colors['gray-i50']};
  }
  &:focus {
    outline: none;
  }
`
export const TextSearchOuter = styled(OptionBtnOuter)`
  width: 279px;
  position: relative;
  &:hover {
    ${TextSearch} {
      border: 1px solid ${colors['primary-100']};
    }
  }
  svg {
    color: ${colors['gray-i60']};
    position: absolute;
    right: 12px;
    cursor: pointer;
  }
`
export const ResetBtn = styled(OptionBtn)`
  width: 90px;
`
export const ResetBtnOuter = styled(OptionBtnOuter)`
  width: 94px;
  &:hover {
    background-color: ${colors['pink-i52']};
    ${ResetBtn} {
      border-color: ${colors['pink-50']};
    }
  }
`