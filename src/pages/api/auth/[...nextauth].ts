import NextAuth from 'next-auth/next'

export default NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [],
})
