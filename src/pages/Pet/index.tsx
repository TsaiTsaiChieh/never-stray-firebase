import { useEffect, useState } from 'react'

import { useLocation, useParams } from 'react-router-dom'

import Profile from './Profile'
import { Footer, Header } from '../../components'
import { useGetPetMutation } from '../../services/api'

const Pet = () => {
  const [profile, setProfile] = useState<PetType | undefined>(undefined)
  const location = useLocation()
  const { id } = useParams()
  const [getPet] = useGetPetMutation()

  useEffect(() => {
    const getPetDetail = async () => {
      const result = await getPet({ id: id! }).unwrap()
      setProfile(result[0])
    }
    if (location.state !== null) setProfile(location.state.detail)
    else {
      getPetDetail()
    }
  }, [location.state, id, getPet])

  return (
    <>
      <Header />
      {profile ? <Profile profile={profile} /> : null}
      <Footer />
    </>
  )
}

export default Pet
