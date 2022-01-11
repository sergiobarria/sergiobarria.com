export default async function Fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
) {
  const res = await fetch(input, init)

  return res.json()
}
