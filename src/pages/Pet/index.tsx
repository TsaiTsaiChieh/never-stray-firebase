import { useParams } from 'react-router-dom'

const Pet = () => {
  const { id } = useParams()

  return (
    <div>{id}</div>
  )
}

export default Pet
