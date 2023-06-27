import useSWR from 'swr'

import { IAuthor } from '../../models/Author'

const serverUrl = import.meta.env.VITE_SERVER_URL

const getAuthor = async (url: string) => {
  const responce = await fetch(url)

  return await responce.json()
}

export const useAuthor = (authorId: number) => {
  const { data, error, isLoading } = useSWR<IAuthor>(
    `${serverUrl}/users/${authorId}`,
    getAuthor
  )

  return {
    author: data,
    error,
    isLoading,
  }
}
