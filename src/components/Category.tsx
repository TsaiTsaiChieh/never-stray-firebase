import { useState } from 'react'

import { faCat, faDog, faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import i18n from 'i18next'

import { FlexCenter } from '../styles/Base'
import {
 ButtonWrap, CategoryName, Container, Wrapper,
} from '../styles/components/Category'

const Category = () => {
  const [activeId, setActiveId] = useState(0)
  const names: string[] = i18n.t('buttons.categories', { returnObjects: true })
  const onClick = (idx: number) => {
    setActiveId(idx)
  }
  const icons = [faPaw, faCat, faDog]
  const categoryItem: CategoryItemType[] = names.map((name, i) => ({ id: i, name, icon: icons[i] }))
 return (
   <Wrapper>
     <Container>
       <FlexCenter>
         {categoryItem.map(({ id, name, icon }) => (
           <ButtonWrap
             key={id}
             className={clsx({ active: activeId === id })}
             onClick={() => onClick(id)}
           >
             <FontAwesomeIcon icon={icon} />
             <CategoryName>{name}</CategoryName>
           </ButtonWrap>
         ))}
       </FlexCenter>
     </Container>
   </Wrapper>
 )
    }
export default Category
