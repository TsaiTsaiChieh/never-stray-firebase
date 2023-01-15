/* eslint-disable react/no-array-index-key */
import * as i18n from 'i18next'

import { useAppSelector } from '../store/hook'
import {
  Circle,
 LoadingText,
 MainLoadingContainer, Shadow, Wrapper,
} from '../styles/components/Loading'

const MainLoading = () => {
  const { mainLoading } = useAppSelector((state) => state.loading)

  return (
    <MainLoadingContainer $visible={mainLoading}>
      <Wrapper>
        {Array.from({ length: 3 }).map((_, i) => <Circle key={i} />)}
        {Array.from({ length: 3 }).map((_, i) => <Shadow key={i} />)}
        <LoadingText>{i18n.t('titles.loading')}</LoadingText>
      </Wrapper>
    </MainLoadingContainer>
  )
}

export default MainLoading
