const Joi = require('joi')

const getProductWithPagination = {
  query: Joi.object().keys({
    page: Joi.number().required().greater(0).default(1),
    limit: Joi.number().required().greater(0).default(10)
  })
}

module.exports = {
  getProductWithPagination
}
