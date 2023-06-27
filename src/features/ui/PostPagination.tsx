import { useEffect, useState, MouseEventHandler } from 'react'
import { Pagination } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

interface IPostPagination {
  lastPage: number
}

export const PostPagination = ({ lastPage }: IPostPagination) => {
  const [pages, setPages] = useState<number[]>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    searchParams.set('page', `${currentPage}`)
    setSearchParams(searchParams)
  }, [currentPage])

  useEffect(() => {
    const arr = Array.from(Array(10))
    setPages(arr.map((_, i) => i + 1))
  }, [lastPage])

  const pageClickHandler: MouseEventHandler<HTMLElement> = (event) => {
    // setCurrentPage(event.currentTarget.value)
  }

  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      {pages.map((page) => {
        return (
          <Pagination.Item as="button" key={page} onClick={pageClickHandler}>
            {page}
          </Pagination.Item>
        )
      })}
      <Pagination.Next />
      <Pagination.Last />
      {/* <Pagination.Item active>{12}</Pagination.Item> */}
      {/* <Pagination.Item disabled>{14}</Pagination.Item> */}
    </Pagination>
  )
}
