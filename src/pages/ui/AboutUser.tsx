import { useParams } from 'react-router-dom'

export const AboutUser = () => {
  const params = useParams()
  return <p>{`About User ${params.id}`}</p>
}
