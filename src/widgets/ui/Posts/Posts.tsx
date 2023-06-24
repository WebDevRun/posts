import useSWR from 'swr'

import { fetcher } from '../../lib/fetcher'
import { Post } from '../../models/Post'

export const Posts = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR<Post[]>(
    'https://jsonplaceholder.typicode.com/posts?_limit=20',
    fetcher
  )

  if (error) return <p>Error...</p>
  if (isLoading) return <p>Loading...</p>
  if (!posts) return <p>No data</p>

  console.log(posts)

  return <div></div>
}
