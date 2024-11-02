const { PrismaClient } = require('@prisma/client')

let prismaInstance = null

const getPrismaClient = () => {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient({
      ...(parseInt(process.env.IS_LOGGING) && {
        log: ['query', 'info', 'warn', 'error']
      })
    })
  }
  return prismaInstance
}

module.exports = { getPrismaClient }
