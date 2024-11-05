const { getPrismaClient } = require('../config/database')

const DEFAULT_LIMIT = 10

const createMember = async (name) => {
  const prisma = getPrismaClient()
  const newMember = await prisma.member.create({
    data: {
      name
    }
  })
  return newMember
}

const getMember = async (page = 1, limit = DEFAULT_LIMIT) => {
  const prisma = getPrismaClient()
  const members = await prisma.member.findMany({
    take: limit,
    skip: (page - 1) * limit,
    include: {
      tickets_created: true,
      tickets_assigned: true
    }
  })

  const count = await prisma.member.count()

  return {
    members,
    totalCount: count,
    totalPages: Math.ceil(count / limit),
    currentPage: page
  }
}

module.exports = { createMember, getMember }
