import i18n from 'i18next'

import { SelectorFilter } from '../../components'
import CityFilter from '../../components/CityFilter'
import ColorFilter from '../../components/filters/ColorFilter'
import OptionFilter from '../../components/OptionFilter'
import { FilterContainer } from '../../styles/pages/LeftFilter'

const LeftFilter = () => {
  const Labels: string[] = i18n.t('labels.filters', { returnObjects: true })
  const AgeOpts: string[] = i18n.t('filters.ages', {
    returnObjects: true,
  })
  const SexOpts: string[] = i18n.t('filters.sexes', {
    returnObjects: true,
  })
  const ColorOpts: string[] = i18n.t('filters.colors', {
    returnObjects: true,
  })
  const CityOpts: LabelValueType[] = i18n.t('filters.cities', { returnObjects: true })
  const ShelterOpts: LabelValueType[] = i18n.t('filters.shelters', { returnObjects: true })
  const ColorPlaceholder: string = i18n.t('placeholders.color')
  const CityPlaceholder: string = i18n.t('placeholders.city')
  const ShelterPlaceholder: string = i18n.t('placeholders.shelter')

  return (
    <FilterContainer>
      <OptionFilter fieldName='age' label={Labels[0]} options={AgeOpts} />
      <OptionFilter fieldName='sex' label={Labels[1]} options={SexOpts} />
      <ColorFilter
        label={Labels[2]}
        options={ColorOpts.map((ele) => ({ label: ele, value: ele }))}
        placeholder={ColorPlaceholder}
      />
      <CityFilter label={Labels[3]} options={CityOpts} placeholder={CityPlaceholder} />
      <SelectorFilter fieldName='shelter' label={Labels[4]} options={ShelterOpts} placeholder={ShelterPlaceholder} />
    </FilterContainer>
  )
}

export default LeftFilter
