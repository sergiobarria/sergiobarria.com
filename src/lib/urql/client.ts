import { createClient } from 'urql'

export const client = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHCMS_URL!,
})
