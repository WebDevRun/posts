import { Button, Card, Col } from 'react-bootstrap'

import { FullPageWrapper, Loader } from '../../../shared'

import { useAuthor } from './useAuthor'

interface IPost {
  title: string
  text: string
  authorId: number
  postId: number
}

export const PostCard = ({ authorId, postId, text, title }: IPost) => {
  const { author, error, isLoading } = useAuthor(authorId)

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
