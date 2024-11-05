const { queryProduct } = require('../services/member.service')
const catchAsync = require('../utils/catchAsync')

const getProductWithPagination = catchAsync(async (req, res) => {
  const page = Number(req.query.page)
  const limit = Number(req.query.limit)

  const result = await queryProduct(page, limit)
  res.send({ result })
})

module.exports = {
  getProductWithPagination
}
