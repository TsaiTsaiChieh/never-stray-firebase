import { styled } from '@linaria/react'

import {
 colors, filters, MD, SM,
} from '..'
import { Contain, FlexCenter } from '../Base'

export const FooterContainer = styled(FlexCenter)`
  width: 100vw;
  padding: 12px 0;
  background: ${colors.secondary};
  color: ${colors.white};
  margin-top: 5px;
  ${MD} {
    margin-top: 50px;
  }
`
export const FooterWrap = styled(Contain)`
  flex-direction: column !important;
  gap: 15px;
  ${SM} {
    flex-direction: row !important;
  }
`
export const ContactContainer = styled(FlexCenter)`
  width: 100%;
  ${SM} {
    width: 30%;
  }
`
export const GithubIcon = styled.img`
  width: 35px;
  height: 35px;
  content: url("/images/github.svg");
  filter: ${filters.white};
`
export const ContactWrap = styled.div`
  display: block;
  height: auto;
  margin-left: 10px;
`
export const Link = styled.a`
  display: block;
  color: ${colors.white};
  font-size: 13px;
  line-height: 1.2;
  letter-spacing: 0.05rem;
`
export const DisclaimerWrap = styled.div`
  width: 100%;
  letter-spacing: 0.01rem;
  ${SM} {
    width: 70%;
  }
`
export const DisclaimerText = styled.p`
  font-size: 12.5px;
  line-height: 1.2;
  color: ${colors.gray9};
`
export const CopyRight = styled.span`
  color: ${colors.white};
  font-size: 13px;
`
