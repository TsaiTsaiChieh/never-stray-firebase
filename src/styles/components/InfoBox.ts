import { styled } from '@linaria/react'

import { colors, MD } from '..'
import { FlexCenter } from '../Base'

export const BoxContainer = styled(FlexCenter)`
  flex-direction: column;
  width: 65px;
  height: 65px;
  background: ${colors.light};
  border-radius: 5px;
  letter-spacing: 0.1em;
  gap: 10px;
`
export const Label = styled.label`
  font-size: 14px;
  color: ${colors.gray7};
  ${MD} {
    font-size: 15px;
  }
`
export const Value = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.gray3};
  ${MD} {
    font-size: 15px;
  }
`
