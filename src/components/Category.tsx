import { useState } from 'react'

import { faCat, faDog, faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

import { Styles } from '../styles'

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
   <div className='py-[10px] bg-primary-10'>
     <div className={`${Styles.container} ${Styles.flexCenter} gap-3`}>
       <div className={`${Styles.flexCenter} gap-2`}>
         {categoryItem.map((ele, i) => (
           <button type='button' key={ele.id} className={clsx(`${Styles.flexCenter} group rounded-[10px] py-1 current:bg-primary-100 text-gray-i200 current:text-white hover:bg-primary-150 group-hover:text-white`, { active: activeId === i })} onClick={() => onClick(i)}>
             <FontAwesomeIcon icon={ele.icon} className={clsx('hidden md:flex text-primary-100 w-[30px] h-[30px] p-1 current:text-white group-hover:text-white', { active: activeId === i })} />
             <span className='text-[15px] py-1 rounded-[10px] px-3 group-hover:text-white'>{ele.name}</span>
           </button>
        ))}
       </div>
     </div>
   </div>
  )
    }
export default Category
