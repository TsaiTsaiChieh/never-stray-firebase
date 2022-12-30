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
  ${XL} {
    display: flex;
  }
`
export const OptionsFilterWrap = styled.div`
  display: flex;
  flex-direction: column;
`
export const LabelName = styled.label`
  margin-bottom: 8px;
`
export const OptionGroup = styled.div`
  display: flex;
  gap: 7px;
`
export const OptionBtn = styled.button`
  font-size: 14px;
  width: 80px;
  height: 40px;
  letter-spacing: 0.1em;
  color: ${colors['gray-i200']};
  border: 1px solid ${colors['gray-i40']};
  border-radius: 5px;
  background: ${colors.white};
`
export const OptionBtnOuter = styled(FlexCenter)`
  width: 86px;
  height: 46px;
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
  width: 268px;
  .css-13cymwt-control, .css-t3ipsp-control {
    height: 40px;
  }
`
export const TextSearch = styled.input`
width: 268px;
height: 40px;
border-radius: 5px;
border: 1px solid ${colors['gray-i40']};
`
export const TextSearchOuter = styled(OptionBtnOuter)`
width: 274px;
height: 46px;
&:hover {
  ${TextSearch} {
  border: 1px solid ${colors['primary-100']};
  }
}
`
