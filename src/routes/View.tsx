import { Route, Routes } from 'react-router-dom'

import PetList from '../pages/PetList/PetList'

const View = () => (

  <Routes>
    <Route path='/'>
      <Route index element={<PetList />} />
      <Route path='/:kind' element={<PetList />} />
    </Route>
  </Routes>
  )

export default View
