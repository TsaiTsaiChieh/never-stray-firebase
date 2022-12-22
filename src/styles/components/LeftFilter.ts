import { styled } from '@linaria/react'

import { colors, XL } from '..'
import { FlexCenter } from '../Base'

export const FilterContainer = styled(FlexCenter)`
  width: 200px;
  height: 200px;
  display: none;
  box-shadow: 0px 0px 8px ${colors['gray-t50']};
  border-radius: 5px;
  padding: 45px 22px 50px 22px;
  ${XL} {
    display: flex;
  }
`
export const OptionsFilterWrap = styled.div`
  display: flex;
`
export const LabelName = styled.label``
