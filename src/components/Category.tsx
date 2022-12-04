import { useState } from 'react'

import { faCat, faDog, faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

import { FlexCenter } from '../styles/Base'
import {
 ButtonWrap, CategoryName, Container, Wrapper,
} from '../styles/components/Category'

const Category = () => {
  const [activeId, setActiveId] = useState(0)
  const onClick = (idx: number) => {
    setActiveId(idx)
  }

  const categoryItem = [
    {
      id: 0,
      name: '全部',
      icon: faPaw,
    },
    {
      id: 1,
      name: '喵喵',
      icon: faCat,
    },
    {
      id: 2,
      name: '汪汪',
      icon: faDog,
    },

  ]
 return (
   <Wrapper>
     <Container>
       <FlexCenter>
         {categoryItem.map((ele, i) => (
           <ButtonWrap
             key={ele.id}
             className={clsx({ active: activeId === i })}
             onClick={() => onClick(i)}
           >
             <FontAwesomeIcon icon={ele.icon} />
             <CategoryName>{ele.name}</CategoryName>
           </ButtonWrap>
         ))}
       </FlexCenter>
     </Container>
   </Wrapper>
 )
    }
export default Category
