import useSWR from 'swr'

import { fetcher } from '../../../app/lib/fetcher'
import { Post } from '../../models/Post'

const serverUrl = import.meta.env.VITE_SERVER_URL

export const usePosts = (page: number) => {
  const { data, error, isLoading } = useSWR<Post[]>(
    `${serverUrl}/posts?_page=${page}`,
    fetcher
  )

  return {
    posts: data,
    error,
    isLoading,
  }
}
