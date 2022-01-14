import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from 'urql'

const isServerSide = typeof window === 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide })

const client = createClient({
  url: 'https://api.github.com/graphql',
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  fetchOptions: () => {
    return {
      headers: {
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  },
})

export { client, ssrCache }
