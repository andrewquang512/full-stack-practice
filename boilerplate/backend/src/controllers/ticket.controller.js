const TicketService = require('../services/ticket.service')
const catchAsync = require('../utils/catchAsync')

const createTicket = catchAsync(async (req, res) => {
  const title = req.body.title
  const description = req.body.description
  const assigneeId = req.body.assigneeId
  const assignerId = req.body.assignerId

  const result = await TicketService.createTicket(
    title,
    description,
    assignerId,
    assigneeId
  )
  res.send({ result })
})

module.exports = {
  createTicket
}
