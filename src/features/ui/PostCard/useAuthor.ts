import useSWR from 'swr'

import { fetcher } from '../../../app/lib/fetcher'
import { Author } from '../../models/Author'

const serverUrl = import.meta.env.VITE_SERVER_URL

export const useAuthor = (authorId: number) => {
  const { data, error, isLoading } = useSWR<Author>(
    `${serverUrl}/users/${authorId}`,
    fetcher
  )

  return {
    author: data,
    error,
    isLoading,
  }
}
