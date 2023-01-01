import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import i18n from 'i18next'
import { useNavigate } from 'react-router-dom'

import { SelectorFilter, TextFilter } from '../../components'
import OptionFilter from '../../components/OptionFilter'
import { Paths } from '../../constants'
import { city2shelters, shelter2city } from '../../constants/limitation'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { resetFilter } from '../../store/reducers/petSlice'
import { FilterText } from '../../styles/components/Category'
import {
 FilterContainer, FilterIconWrap, OptionsFilterWrap, ResetBtn, ResetBtnOuter,
} from '../../styles/components/Filter'

const LeftFilter = () => {
  const dispatch = useAppDispatch()
  const nav = useNavigate()
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
  const CityOpts: LabelValueType[] = i18n.t('filters.cities', {
    returnObjects: true,
  })
  const ShelterOpts: LabelValueType[] = i18n.t('filters.shelters', {
    returnObjects: true,
  })
  const { filter } = useAppSelector((state) => state.pet)
  const shelterOptsMap = filter.city
    ? ShelterOpts.filter((ele) => city2shelters[filter.city!].includes(ele.value as number))
    : ShelterOpts
  const cityOptsMap = filter.shelter
    ? CityOpts.filter((ele) => shelter2city[filter.shelter!] === ele.value)
    : CityOpts
  const resetState = () => {
    dispatch(resetFilter())
    nav({ pathname: Paths.home })
  }
  return (
    <FilterContainer>
      <FilterIconWrap>
        <FontAwesomeIcon icon={faFilter} />
        <FilterText>{i18n.t('buttons.filter')}</FilterText>
      </FilterIconWrap>
      <TextFilter
        fieldName='id'
        label={Labels[0]}
        placeholder={Placeholders[0]}
      />
      <OptionFilter fieldName='age' label={Labels[1]} options={AgeOpts} />
      <OptionFilter fieldName='sex' label={Labels[2]} options={SexOpts} />
      <SelectorFilter
        fieldName='species'
        label={Labels[3]}
        options={SpeciesOpts.map((ele) => ({ label: ele, value: ele }))}
        placeholder={Placeholders[1]}
      />
      <SelectorFilter
        fieldName='color'
        label={Labels[4]}
        options={ColorOpts.map((ele) => ({ label: ele, value: ele }))}
        placeholder={Placeholders[2]}
      />
      <SelectorFilter
        fieldName='city'
        label={Labels[5]}
        options={cityOptsMap}
        placeholder={Placeholders[3]}
      />
      <SelectorFilter
        fieldName='shelter'
        label={Labels[6]}
        options={shelterOptsMap}
        placeholder={Placeholders[4]}
      />
      <OptionsFilterWrap>
        <ResetBtnOuter>
          <ResetBtn onClick={resetState}>{i18n.t('buttons.reset')}</ResetBtn>
        </ResetBtnOuter>
      </OptionsFilterWrap>
    </FilterContainer>
  )
}

export default LeftFilter
