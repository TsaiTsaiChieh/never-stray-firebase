export const Header = () => (
  <div className='py-[5px] border-b-[3px] border-primary-100'>
    <div className='sm:max-w-[576px] sm:w-[80%] md:max-w-[820px] md:w-[85%] max-w-[1440px] w-[90%] m-auto flex  items-center justify-center'>
      <img src='/logo.svg' alt='logo' />
      <div className='flex'>
        <div className='w-[34px] h-[34px] border-[2px] border-primary-100 rounded-full' />
        <span className='my-auto ml-1 text-gray-i200'>登入</span>
      </div>
    </div>
  </div>
)

export default Header
