import { styled } from '@linaria/react'

import { colors, filters } from '..'
import { FlexCenter } from '../Base'

export const PageWrapper = styled(FlexCenter)`
  margin: 20px 0;
  gap: 30px;
`
export const LeftWrap = styled.div`
  display: flex;
  gap: 15px;
`
export const RightWrap = styled(LeftWrap)`
  display: flex;
`
export const PageIcon = styled.img<{ $content: string }>`
  content: ${(props) => `url(${props.$content})`};
  width: 100%;
  height: 22px;
  font-size: 20px;
  filter: ${filters.gray3};
`
export const PageButton = styled.button`
  cursor: pointer;
  width: 50%;
  height: 40px;
  svg {
    color: ${colors.gray3};
    font-size: 20px;
  }
  &.disabled {
    ${PageIcon} {
      filter: ${filters.gray6};
    }
  }
`
export const PageInput = styled.input`
  width: 80px;
  text-align: center;
  font-size: 16px;
  color: ${colors.white};
  padding: 5px 10px;
  border: 2px ${colors.gray3} solid;
  background: ${colors.primary};
  outline: none;
  border: none;
  cursor: pointer;
  -webkit-border-radius: 5px;
  border-radius: 5px;
`
