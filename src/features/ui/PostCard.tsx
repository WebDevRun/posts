import { Button, Card, Col } from 'react-bootstrap'
import useSWR from 'swr'

import { fetcher } from '../../widgets/lib/fetcher'
import { FullPageWrapper, Loader } from '../../shared'

import { Author } from '../models/Author'

interface IPost {
  title: string
  text: string
  authorId: number
  postId: number
}

const serverUrl = import.meta.env.VITE_SERVER_URL

export const PostCard = ({ authorId, postId, text, title }: IPost) => {
  const {
    data: author,
    error,
    isLoading,
  } = useSWR<Author>(`${serverUrl}/users/${authorId}`, fetcher)

  if (error) return <p>Произошла ошибка</p>

  if (isLoading)
    return (
      <FullPageWrapper>
        <Loader />
      </FullPageWrapper>
    )

  if (!author) return <p>Нет данных</p>

  const clickHandler = () => {
    console.log(postId)
  }

  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button onClick={clickHandler}>Показать комментарии</Button>
        </Card.Body>
        <Card.Footer>{author.name}</Card.Footer>
      </Card>
    </Col>
  )
}
