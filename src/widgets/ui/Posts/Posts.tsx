import { Container, Row } from 'react-bootstrap'

import { PostCard } from '../../../features'
import { FullPageWrapper, Loader } from '../../../shared'

import { usePosts } from './usePosts'

export const Posts = () => {
  const { posts, error, isLoading } = usePosts()

  if (error) return <p>Произошла ошибка</p>

  if (isLoading)
    return (
      <FullPageWrapper>
        <Loader />
      </FullPageWrapper>
    )

  if (!posts) return <p>Нет данных</p>

  return (
    <Container>
      <Row lg={3} md={2} xxs={1} className="g-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            postId={post.id}
            authorId={post.userId}
            text={post.body}
            title={post.title}
          />
        ))}
      </Row>
    </Container>
  )
}
