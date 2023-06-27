import useSWR from 'swr'

import { IPost } from '../../models/Post'

const serverUrl = import.meta.env.VITE_SERVER_URL

const fetchPsops = async (url: string) => {
  const responce = await fetch(url)
  const posts: IPost[] = await responce.json()
  const totalCount = responce.headers.get('X-Total-Count')
  return { posts, totalCount }
}

interface IResponce {
  posts: IPost[]
  totalCount: string | null
}

export const usePosts = (page: number) => {
  const { data, error, isLoading } = useSWR<IResponce>(
    `${serverUrl}/posts?_page${page}`,
    fetchPsops
  )

  return {
    data,
    error,
    isLoading,
  }
}
