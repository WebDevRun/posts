import { Col, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

import { PostCard } from '../../../entities'
import { PostPagination, usePosts } from '../../../features'

export const Posts = () => {
  const [searchParams] = useSearchParams()
  const { data, error, isLoading } = usePosts(() => {
    const queryPage = searchParams.get('page')
    return Number(queryPage)
  })

  if (isLoading) return null

  if (error) {
    return (
      <Row md={2} xxs={1} className="g-4 mt-2 mb-2">
        <p>Произошла ошибка</p>
      </Row>
    )
  }

  if (data === undefined) {
    return (
      <Row md={2} xxs={1} className="g-4 mt-2 mb-2">
        <p>Нет данных</p>
      </Row>
    )
  }

  return (
    <>
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

      {Number(data.totalCount) / data.posts.length && (
        <Row className="mt-4">
          <Col className="d-flex justify-content-center">
            <PostPagination />
          </Col>
        </Row>
      )}
    </>
  )
}
