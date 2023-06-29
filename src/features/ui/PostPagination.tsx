import { useEffect, useState, MouseEventHandler } from 'react'
import { Pagination } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { usePosts } from '../../widgets/lib/usePosts'

export const PostPagination = () => {
  const [pages, setPages] = useState<number[]>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(() => {
    const queryPage = searchParams.get('page')

    return Number(queryPage) || 1
  })
  const { data } = usePosts(currentPage)

  useEffect(() => {
    if (data === undefined || data.totalCount === null) return

    const pages = Math.floor(Number(data.totalCount) / data.posts.length)
    const arr = Array.from(Array(pages))

    setPages(arr.map((_, i) => i + 1))
  }, [data])

  useEffect(() => {
    searchParams.set('page', `${currentPage}`)
    setSearchParams(searchParams)
  }, [currentPage])

  const pageClickHandler: MouseEventHandler<HTMLElement> = (event) => {
    const textContent = event.currentTarget.textContent

    if (textContent) setCurrentPage(parseInt(textContent))
  }

  const firstPageClickHandler: MouseEventHandler<HTMLElement> = () => {
    setCurrentPage(1)
  }

  const prevPageClickHandler: MouseEventHandler<HTMLElement> = () => {
    if (currentPage <= 1) return

    setCurrentPage((prev) => prev - 1)
  }

  const nextPageClickHandler: MouseEventHandler<HTMLElement> = () => {
    if (currentPage >= pages.length) return

    setCurrentPage((prev) => prev + 1)
  }

  const lastPageClickHandler: MouseEventHandler<HTMLElement> = () => {
    setCurrentPage(pages.length)
  }

  return (
    <Pagination>
      <Pagination.First onClick={firstPageClickHandler} />
      <Pagination.Prev onClick={prevPageClickHandler} />
      {pages.map((page) => {
        const queryPage = Number(searchParams.get('page'))

        return (
          <Pagination.Item
            key={page}
            active={page === queryPage}
            onClick={pageClickHandler}
          >
            {page}
          </Pagination.Item>
        )
      })}
      <Pagination.Next onClick={nextPageClickHandler} />
      <Pagination.Last onClick={lastPageClickHandler} />
    </Pagination>
  )
}
