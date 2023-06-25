import useSWR from 'swr'

import { Post } from '../../models/Post'

const serverUrl = import.meta.env.VITE_SERVER_URL

const fetchPsops = async (url: string) => {
  const responce = await fetch(url)
  return await responce.json()
}

export const usePosts = () => {
  const { data, error, isLoading } = useSWR<Post[]>(
    `${serverUrl}/posts`,
    fetchPsops
  )

  return {
    posts: data,
    error,
    isLoading,
  }
}
