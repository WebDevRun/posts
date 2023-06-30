import { useEffect, useState, MouseEventHandler } from 'react'
import { Pagination } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { usePosts } from '../lib/usePosts'
import { useResponsivePages } from '../lib/usePersponsivePages'

export const PostPagination = () => {
  const [pages, setPages] = useState<number[]>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(() => {
    const queryPage = searchParams.get('page')

    return Number(queryPage) || 1
  })
  const { data } = usePosts(currentPage)
  const responsivePages = useResponsivePages(pages, currentPage)

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

  if (responsivePages === undefined) return null

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
      {responsivePages.map((page, index) => {
        if (page === 'ellipsis') {
          return <Pagination.Ellipsis key={index} disabled />
        }

        return (
          <Pagination.Item
            key={index}
            active={page === currentPage}
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
