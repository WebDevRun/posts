import { Container, Row } from 'react-bootstrap'
import useSWR from 'swr'

import { PostCard } from '../../features'
import { FullPageWrapper, Loader } from '../../shared'

import { fetcher } from '../lib/fetcher'
import { Post } from '../models/Post'

const serverUrl = import.meta.env.VITE_SERVER_URL

export const Posts = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR<Post[]>(`${serverUrl}/posts?_limit=20`, fetcher)

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
