export const fetcher = async (path: string) => {
  const res = await fetch(path)

  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return res.json()
}
