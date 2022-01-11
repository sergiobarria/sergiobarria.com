import {
  createClient,
  // dedupExchange,
  // cacheExchange,
  // fetchExchange,
  // ssrExchange,
} from 'urql'

// const isServerSide = typeof window === 'undefined'

// const ssr = ssrExchange({
//   isClient: !isServerSide,
// })

export const client = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHCMS_URL!,
  // exchanges: [dedupExchange, cacheExchange, ssr, fetchExchange],
})
