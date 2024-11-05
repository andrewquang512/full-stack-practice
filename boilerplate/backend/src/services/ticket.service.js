const { getPrismaClient } = require('../config/database')
const ApiError = require('../utils/ApiError')
const DEFAULT_LIMIT = 10
const httpStatus = require('http-status')

// Function to create a new ticket
const createTicket = async (title, description, assignerId, assigneeId) => {
  const prisma = getPrismaClient()

  const members = prisma.member.findMany({
    where: {
      id: { in: [assignerId, assigneeId] }
    }
  })

  if (members.length == 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Assigner or Assignee not valid')
  }

  const newTicket = await prisma.ticket.create({
    data: {
      title,
      description,
      assigner: { connect: { id: assignerId } }, // Connect the assigner by ID
      assignee: { connect: { id: assigneeId } } // Connect the assignee by ID
    }
  })
  return newTicket
}

const getTicket = async (page = 1, limit = DEFAULT_LIMIT) => {
  const prisma = getPrismaClient()
  const tickets = await prisma.ticket.findMany({
    take: limit,
    skip: (page - 1) * limit,
    include: {
      assigner: true,
      assignee: true
    }
  })

  const count = await prisma.ticket.count()

  return {
    tickets,
    totalCount: count,
    totalPages: Math.ceil(count / limit),
    currentPage: page
  }
}

// Function to get a ticket by ID
const getTicketById = async (id) => {
  const prisma = getPrismaClient()
  const ticket = await prisma.ticket.findUnique({
    where: { id },
    include: {
      assigner: true,
      assignee: true
    }
  })
  return ticket
}

const updateTicket = async (id, data) => {
  const prisma = getPrismaClient()
  const updatedTicket = await prisma.ticket.update({
    where: { id },
    data: {
      ...data
    }
  })
  return updatedTicket
}

const deleteTicket = async (id) => {
  const prisma = getPrismaClient()
  const deletedTicket = await prisma.ticket.delete({
    where: { id }
  })
  return deletedTicket
}

module.exports = {
  createTicket,
  getTicket,
  updateTicket,
  deleteTicket,
  getTicketById
}
