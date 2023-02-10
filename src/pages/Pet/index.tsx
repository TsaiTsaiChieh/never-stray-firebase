import { useEffect, useState } from 'react'

import { useLocation, useParams } from 'react-router-dom'

import Profile from './Profile'
import { Footer, Header } from '../../components'
import { useGetPetMutation } from '../../services/api'
import { useAppSelector } from '../../store/hook'

const Pet = () => {
  const { pets, currIdx } = useAppSelector((state) => state.pet)
  const [profile, setProfile] = useState<PetType | undefined>(pets.length !== 0 && typeof (currIdx) === 'number' ? pets[currIdx] : undefined)
  const location = useLocation()
  const { id } = useParams()
  const [getPet] = useGetPetMutation()

  useEffect(() => {
    const getPetDetail = async () => {
      const result = await getPet({ id: id! }).unwrap()
      setProfile(result[0])
    }
    if (pets.length === 0 && location.state !== null) setProfile(location.state.detail)
    else {
      getPetDetail()
    }
  }, [pets, location.state, id, getPet])

  return (
    <>
      <Header />
      {profile ? <Profile profile={profile} /> : null}
      <Footer />
    </>
  )
}

export default Pet
