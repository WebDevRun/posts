import useSWR from 'swr'

import { Author } from '../../models/Author'

const serverUrl = import.meta.env.VITE_SERVER_URL

const getAuthor = async (url: string) => {
  const responce = await fetch(url)

  return await responce.json()
}

export const useAuthor = (authorId: number) => {
  const { data, error, isLoading } = useSWR<Author>(
    `${serverUrl}/users/${authorId}`,
    getAuthor
  )

  return {
    author: data,
    error,
    isLoading,
  }
}
