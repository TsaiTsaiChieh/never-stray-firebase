import { Styles } from '../styles'

export const Header = () => (
  <div className='py-[5px] border-b-[3px] border-primary-100'>
    <div className={`${Styles.container} ${Styles.flexCenter} lg:justify-between`}>
      <img src='/logo.svg' alt='logo' />
      <div className='flex absolute right-1 lg:relative lg:right-auto'>
        <div className='w-[34px] h-[34px] border-[2px] border-primary-100 rounded-full' />
        <span className='my-auto ml-2 text-gray-i200'>登入</span>
      </div>
    </div>
  </div>
)

export default Header
