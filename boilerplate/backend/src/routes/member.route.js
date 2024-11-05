const express = require('express')
const validate = require('../middlewares/validate')
const productValidation = require('../validations/product.validation')
const productController = require('../controllers/member.controller')

const router = express.Router()

router.get('/', productController.getProductWithPagination)

module.exports = router
/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management and retrieval
 */

/**
 * @swagger
 * /product:
 *   get:
 *     summary: Retrieve Products with Pagination
 *     description: Fetch a list of products with pagination support.
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: The page number to retrieve (default is 1).
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: The number of products per page (default is 10).
 *     responses:
 *       "200":
 *         description: Successful retrieval of products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 products:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 *                 totalCount:
 *                   type: integer
 *                   example: 100
 *                 totalPages:
 *                   type: integer
 *                   example: 10
 *                 currentPage:
 *                   type: integer
 *                   example: 1
 */