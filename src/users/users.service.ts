import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '~/prisma.service'
import { UserFindManyQuery, UserFindOneParam, UserUpdateInput } from './users.entity'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(input: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: input,
    })
  }

  findAll(input: UserFindManyQuery) {
    return this.prisma.user.findMany({
      skip: input.skip,
      take: input.take,
      orderBy: {
        [input.sort]: input.order,
      },
    })
  }

  findOne(id: UserFindOneParam) {
    return this.prisma.user.findUnique({
      where: { id },
    })
  }

  update(id: UserFindOneParam, input: UserUpdateInput) {
    return this.prisma.user.update({
      where: { id },
      data: input,
    })
  }

  remove(id: UserFindOneParam) {
    return this.prisma.user.delete({
      where: { id },
    })
  }
}
