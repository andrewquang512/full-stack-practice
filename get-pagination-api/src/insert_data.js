const { getPrismaClient } = require('./config/database')
const { faker } = require('@faker-js/faker')

const prisma = getPrismaClient()

const createFakeProducts = async (numProducts = 10) => {
  const products = []

  for (let i = 0; i < numProducts; i++) {
    const product = {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      iamge: faker.image.url(),
      created_at: new Date(),
      updated_at: new Date()
    }

    products.push(product)
  }

  await prisma.product.createMany({ data: products })
  console.log(`${numProducts} fake products created!`)
}

const createFakeRatings = async (numRatings = 30) => {
  const ratings = []

  for (let i = 0; i < numRatings; i++) {
    const rating = {
      content: faker.lorem.sentence(),
      rate_star: Math.floor(Math.random() * 5) + 1,
      productId: faker.helpers.arrayElement(
        await prisma.product.findMany({ select: { id: true } })
      ).id
    }

    ratings.push(rating)
  }

  await prisma.rating.createMany({ data: ratings })
  console.log(`${numRatings} fake ratings created!`)
}

const seedDatabase = async () => {
  await createFakeProducts(10)
  await createFakeRatings(30)
  await prisma.$disconnect()
}

seedDatabase().catch((e) => {
  console.error(e)
  process.exit(1)
})
