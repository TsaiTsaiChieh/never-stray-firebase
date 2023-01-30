import { styled } from '@linaria/react'

import { colors, MD } from '..'
import { Contain } from '../Base'

export const Container = styled(Contain)`
  height: calc(100vh - 58px - 109px);
  ${MD} {
    display: flex;
    gap: 30px;
  }
`

export const AvatarWrap = styled.div`
  margin-top: 20px;
  width: 100%;
  ${MD} {
    width: 50%;
    margin-top: 30px;
  }
`
export const Avatar = styled.div<{ $content: string }>`
  height: 40vh;
  object-fit: cover;
  background: ${(props) => `url(${props.$content})`} no-repeat center;
  background-size: cover;
  border-radius: 6px;
  border: 4px solid ${colors.primaryLighten};
  ${MD} {
    height: 500px;
  }
`
export const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  ${MD} {
    width: 50%;
  }
`
export const SummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;
  letter-spacing: 0.1em;
`
export const ShelterName = styled.h2`
  font-weight: bold;
  color: ${colors.gray2};
  font-size: 18px;
`
export const LabelAndValue = styled.div`
  display: flex;
`
export const Label = styled.label`
  color: ${colors.gray5};
  margin-right: 12px;
  font-size: 15px;
`
export const Value = styled.span`
  font-size: 15px;
  color: ${colors.gray3};
`
export const UpdateTime = styled(Value)`
  color: ${colors.gray5};
`
export const InfoBoxWrap = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  ${MD} {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 150px;
    gap: 20px;
  }
`
export const IntroWrap = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const IntroLabel = styled(Label)`
  font-size: 16px;
  color: ${colors.secondary};
  font-weight: bold;
`
export const IntroValue = styled(Value)`
  font-size: 15px;
  color: ${colors.gray5};
`
