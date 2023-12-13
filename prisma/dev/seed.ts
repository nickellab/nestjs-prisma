import { PrismaClient } from '@prisma/client'
import { initialize, defineExmapleFactory } from './fabbrica'

const prisma = new PrismaClient()
initialize({ prisma })

const main = async () => {
  const exampleFactory = defineExmapleFactory()
  exampleFactory.create()
}

main()
