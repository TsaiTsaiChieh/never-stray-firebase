import i18n from 'i18next'

import { SelectorFilter } from '../../components'
import OptionFilter from '../../components/OptionFilter'
import { FilterContainer } from '../../styles/pages/LeftFilter'

const LeftFilter = () => {
  const Labels: string[] = i18n.t('labels.filters', { returnObjects: true })
  const SpeciesOpts: string[] = i18n.t('filters.species', {
    returnObjects: true,
  })
  const AgeOpts: string[] = i18n.t('filters.ages', {
    returnObjects: true,
  })
  const SexOpts: string[] = i18n.t('filters.sexes', {
    returnObjects: true,
  })
  const ColorOpts: string[] = i18n.t('filters.colors', {
    returnObjects: true,
  })
  const Placeholders: string[] = i18n.t('placeholders.selector', {
    returnObjects: true,
  })
  const CityOpts: LabelValueType[] = i18n.t('filters.cities', { returnObjects: true })
  const ShelterOpts: LabelValueType[] = i18n.t('filters.shelters', { returnObjects: true })

  return (
    <FilterContainer>
      <OptionFilter fieldName='age' label={Labels[0]} options={AgeOpts} />
      <OptionFilter fieldName='sex' label={Labels[1]} options={SexOpts} />
      <SelectorFilter fieldName='species' label={Labels[2]} options={SpeciesOpts.map((ele) => ({ label: ele, value: ele }))} placeholder={Placeholders[0]} />
      <SelectorFilter
        fieldName='color'
        label={Labels[3]}
        options={ColorOpts.map((ele) => ({ label: ele, value: ele }))}
        placeholder={Placeholders[1]}
      />
      <SelectorFilter
        fieldName='city'
        label={Labels[4]}
        options={CityOpts}
        placeholder={Placeholders[2]}
      />
      <SelectorFilter fieldName='shelter' label={Labels[5]} options={ShelterOpts} placeholder={Placeholders[3]} />
    </FilterContainer>
  )
}

export default LeftFilter
