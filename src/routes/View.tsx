import { Navigate, Route, Routes } from 'react-router-dom'

import { Paths } from '../constants'
import PetList from '../pages/PetList/PetList'

const View = () => (
  <Routes>
    <Route path='*' element={<Navigate to={Paths.home} replace />} />
    <Route path={Paths.home} element={<PetList />} />
  </Routes>
  )

export default View
