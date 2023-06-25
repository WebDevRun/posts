import { NavLink } from 'react-router-dom'
import { Button, Card, Placeholder } from 'react-bootstrap'

import { useAuthor } from './useAuthor'

interface IPost {
  title: string
  text: string
  authorId: number
  postId: number
}

const plasholderSizes = [
  ['25', '50', '75'],
  ['50', '50', '50'],
  ['25', '50', '25'],
]

export const PostCard = ({ authorId, postId, text, title }: IPost) => {
  const { author, error, isLoading } = useAuthor(authorId)

  if (isLoading) {
    return (
      <Card className="w-100">
        <Card.Body className="d-flex flex-column justify-content-between">
          <Placeholder as={Card.Title} className="w-50" />
          <div className="d-flex gap-1 flex-column">
            {plasholderSizes.map((size, index) => {
              return (
                <div key={index} className="d-flex gap-1">
                  <Placeholder size="lg" className={`w-${size[0]}`} />
                  <Placeholder size="lg" className={`w-${size[1]}`} />
                  <Placeholder size="lg" className={`w-${size[2]}`} />
                </div>
              )
            })}
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <Placeholder as={Card.Link} size="lg" className="w-25" />
          <Placeholder.Button size="lg" className="w-25" />
        </Card.Footer>
      </Card>
    )
  }

  if (error) return <p>Произошла ошибка</p>

  if (!author) return <p>Нет данных</p>

  const clickHandler = () => {
    console.log(postId)
  }

  return (
    <Card>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <Card.Link as={NavLink} to={`about-user/${authorId}`}>
          {author.name}
        </Card.Link>
        <Button onClick={clickHandler}>Показать комментарии</Button>
      </Card.Footer>
    </Card>
  )
}
