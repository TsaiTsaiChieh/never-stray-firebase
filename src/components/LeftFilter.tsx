import i18n from 'i18next'

import { FilterContainer } from '../styles/components/LeftFilter'
import AgeFilter from './filters/AgeFilter'

const LeftFilter = () => {
  const Labels: string[] = i18n.t('labels.filters', { returnObjects: true })

  return (
    <FilterContainer>
      <AgeFilter label={Labels[0]} />
    </FilterContainer>
)
  }

export default LeftFilter
