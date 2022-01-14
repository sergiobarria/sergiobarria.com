import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your db connection limit

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  let globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient
  }

  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient()
  }

  prisma = globalWithPrisma.prisma
}

export default prisma
