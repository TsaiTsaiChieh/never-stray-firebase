import * as i18n from 'i18next'

import {
  ContactContainer,
  ContactWrap,
  CopyRight,
  DisclaimerText,
  DisclaimerWrap,
  FooterContainer,
  FooterWrap,
  GithubIcon,
  Link,
} from '../styles/components/Footer'

const Footer = () => (
  <FooterContainer>
    <FooterWrap className='flex-center'>
      <ContactContainer>
        <a
          href='https://github.com/TsaiTsaiChieh/never-stray-firebase'
          target='_blank'
          rel='noreferrer'
        >
          <GithubIcon alt='github' />
        </a>
        <ContactWrap>
          <Link
            href='mailto:jecica196@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            {i18n.t('footer.email')}
          </Link>
          <Link
            href='https://github.com/TsaiTsaiChieh/never-stray-firebase/issues'
            target='_blank'
            rel='noreferrer'
          >
            {i18n.t('footer.report')}
          </Link>
        </ContactWrap>
      </ContactContainer>
      <DisclaimerWrap>
        <DisclaimerText>{i18n.t('footer.disclaimer')}</DisclaimerText>
        <CopyRight>{i18n.t('footer.copy_right')}</CopyRight>
      </DisclaimerWrap>
    </FooterWrap>
  </FooterContainer>
  )

export default Footer
