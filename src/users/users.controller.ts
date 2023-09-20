import { Controller } from '@nestjs/common'
import { UsersService } from './users.service'
import { UserCreateInput, UserFindManyQuery, UserFindOneParam, UserUpdateInput } from './users.entity'
import { TypedBody, TypedParam, TypedQuery, TypedRoute } from '@nestia/core'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @TypedRoute.Post()
  async create(@TypedBody() input: UserCreateInput) {
    return this.usersService.create(input)
  }

  @TypedRoute.Get()
  async findAll(@TypedQuery() query: UserFindManyQuery) {
    return this.usersService.findAll(query)
  }

  @TypedRoute.Get(':id')
  async findOne(@TypedParam('id') id: UserFindOneParam) {
    return this.usersService.findOne(id)
  }

  @TypedRoute.Patch(':id')
  update(@TypedParam('id') id: UserFindOneParam, @TypedBody() input: UserUpdateInput) {
    return this.usersService.update(id, input)
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: UserFindOneParam) {
    return this.usersService.remove(id)
  }
}
