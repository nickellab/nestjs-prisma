import { Prisma } from '@prisma/client'
import { tags } from 'typia'

export interface UserCreateInput extends Prisma.UserCreateInput {
  id: string & tags.Format<'uuid'>
  username: string
}

export type UserFindOneParam = string & tags.Format<'uuid'>

export interface UserUpdateInput extends Prisma.UserUpdateInput {
  id: undefined
  username: string
}

export interface UserFindManyQuery {
  skip?: number & tags.Minimum<0>
  take?: number & tags.Minimum<0>
  sort: keyof Prisma.UserOrderByWithRelationInput
  order: 'asc' | 'desc'
}
