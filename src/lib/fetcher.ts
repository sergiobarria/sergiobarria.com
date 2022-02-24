export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
) {
  const res = await fetch(input, init);

  return res.json();
}
