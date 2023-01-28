import { Navigate, Route, Routes } from 'react-router-dom'

import { Paths } from '../constants'
import Pet from '../pages/Pet'
import PetList from '../pages/PetList'

const View = () => (
  <Routes>
    <Route path='*' element={<Navigate to={Paths.home} replace />} />
    <Route path={Paths.home} element={<PetList />} />
    <Route path={`${Paths.pet}/:id`} element={<Pet />} />
  </Routes>
  )

export default View
