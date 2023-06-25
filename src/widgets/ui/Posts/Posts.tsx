import { Col, Container, Row } from 'react-bootstrap'

import { PostCard } from '../../../features'
import { FullPageWrapper, Loader } from '../../../shared'

import { usePosts } from './usePosts'

export const Posts = () => {
  const { posts, error, isLoading } = usePosts()

  if (isLoading)
    return (
      <FullPageWrapper>
        <Loader />
      </FullPageWrapper>
    )

  if (error) return <p>Произошла ошибка</p>

  if (!posts) return <p>Нет данных</p>

  return (
    <Container>
      <Row md={2} xxs={1} className="g-4 mt-2 mb-2">
        {posts.map((post) => (
          <Col key={post.id} className="d-flex align-items-stretch">
            <PostCard
              postId={post.id}
              authorId={post.userId}
              text={post.body}
              title={post.title}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
