import { useMemo } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { PostCard, PostPagination } from '../../../features'
import { FullPageWrapper, Loader } from '../../../shared'

import { usePosts } from './usePosts'

export const Posts = () => {
  const { data, error, isLoading } = usePosts(1)

  const lastPage = useMemo(() => {
    if (data === undefined) return 0

    const { posts, totalCount } = data
    const totalCountNumber = Number(totalCount)

    return Math.floor(totalCountNumber / posts.length)
  }, [data])

  if (isLoading)
    return (
      <FullPageWrapper>
        <Loader />
      </FullPageWrapper>
    )

  if (error) return <p>Произошла ошибка</p>

  if (!data?.posts) return <p>Нет данных</p>

  return (
    <Container>
      <Row md={2} xxs={1} className="g-4 mt-2 mb-2">
        {data.posts.map((post) => (
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

      {lastPage >= 1 && (
        <Row className="mt-4">
          <Col className="d-flex justify-content-center">
            <PostPagination lastPage={lastPage} />
          </Col>
        </Row>
      )}
    </Container>
  )
}
