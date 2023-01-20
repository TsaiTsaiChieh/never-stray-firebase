import { styled } from '@linaria/react'

import {
 colors, filters, LG, SM,
} from '..'
import { Contain, FlexCenter } from '../Base'

export const Wrapper = styled.div`
  padding: 5px 0;
  border-bottom: 3px solid ${colors.primary};
`
export const Container = styled(Contain)`
  ${LG} {
    justify-content: space-between;
  }
`
export const LogoWrap = styled(FlexCenter)`
  width: 100%;
  cursor: pointer;
`
export const Logo = styled.img`
  content: url("/images/logo.svg");
  filter: ${filters.primary};
  width: 45px;
  height: 45px;
`
export const LogoTextWrap = styled.div`
  margin-left: 5px;
`
export const ChText = styled.h1`
  color: ${colors.primary};
  letter-spacing: 1.5px;
  font-size: 16px;
`
export const EnText = styled.h1`
  color: ${colors.gray2};
  letter-spacing: 1.2px;
  font-size: 12px;
  margin-top: 2px;
`
export const AvatarWrap = styled(FlexCenter)`
  width: 100px;
  gap: 1px;
  position: absolute;
  cursor: pointer;
  right: 0;
  ${SM} {
    right: 4px;
  }
  ${LG} {
    position: relative;
    right: 0;
  }
`
export const GoogleLogoWrap = styled(FlexCenter)`
  width: 40.59px;
  height: 40.59px;
`
export const GoogleLogo = styled.img`
  content: url("/images/google.svg");
  width: 65%;
  filter: ${filters.primary};
`
export const UserPic = styled.img<{ $content: string }>`
  width: 35px;
  height: 35px;
  content: ${(props) => `url(${props.$content})`};
  border: 2.8px solid ${colors.primary};
  border-radius: 50%;
`
export const Avatar = styled.div`
  width: 34px;
  height: 34px;
  border: 2px solid ${colors.primary};
  border-radius: 50%;
`
export const AuthState = styled.button`
  color: ${colors.gray3};
  padding: 0 0 0 2px;
  font-size: 14px;
  ${SM} {
    font-size: 15px;
    padding: 0 0 0 5px;
  }
`
