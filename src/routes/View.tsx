import { Route, Routes } from 'react-router-dom'

import PetList from '../pages/PetList/PetList'

const View = () => (
  <Routes>
    <Route path='/' element={<PetList />} />
  </Routes>
  )

export default View
