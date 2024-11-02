const { getPrismaClient } = require('../config/database')

const DEFAULT_LIMIT = 10

/**
 * Retrieves products with pagination.
 *
 * @param {number} [page=1] - The page number to retrieve (default is 1).
 * @param {number} [limit=DEFAULT_LIMIT] - The number of products per page (default is 10).
 * @returns {Promise<Object>} An object containing the paginated products and related info.
 * @returns {Array} products - The array of product objects.
 * @returns {number} totalCount - The total number of products available.
 * @returns {number} totalPages - The total number of pages based on the limit.
 * @returns {number} currentPage - The current page number requested.
 */
const queryProduct = async (page = 1, limit = DEFAULT_LIMIT) => {
  const currentPage = page
  const pageLimit = limit
  const prisma = getPrismaClient()
  const products = await prisma.product.findMany({
    take: pageLimit,
    skip: (currentPage - 1) * pageLimit,
    orderBy: {
      created_at: 'desc'
    },
    include: {
      rating: true
    }
  })

  const count = await prisma.product.count()

  const formattedProducts = products.map((product) => {
    const totalReviews = product.rating.length
    const averageRating =
      totalReviews > 0
        ? product.rating.reduce((acc, rating) => acc + rating.rate_star, 0) /
          totalReviews
        : 0

    return {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.iamge,
      rating: {
        average: averageRating,
        reviews: totalReviews
      }
    }
  })

  return {
    products: formattedProducts,
    totalCount: count,
    totalPages: Math.ceil(count / pageLimit),
    currentPage
  }
}

module.exports = { queryProduct }
