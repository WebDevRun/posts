export const fetcher = async (url: string, init?: RequestInit) => {
  const responce = await fetch(url, init)
  return await responce.json()
}
