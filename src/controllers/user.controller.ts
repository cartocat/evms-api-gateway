import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Query,
  Delete,
  UseGuards,
} from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserDTO } from 'src/dtos';

/**
 * User Controller Class
 */
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'List of Users', type: [UserDTO] })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiInternalServerErrorResponse({ description: 'Error Occured at Server' })
  async getAll(@Query() userQueryDTO: UserQueryDTO) {
    const { userName, skip, take } = userQueryDTO;
    return await this.userService.findAll(userName, skip, take);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'User Result', type: UserDTO })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiInternalServerErrorResponse({ description: 'Error Occured at Server' })
  async getOneById(@Param('id') id: number) {
    return await this.userService.findOneById(id);
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'User Result', type: UserDTO })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiInternalServerErrorResponse({ description: 'Error Occured at Server' })
  async updateUser(@Body() user: UserDTO) {
    return await this.userService.updateUser(user);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'User Result', type: UserDTO })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiInternalServerErrorResponse({ description: 'Error Occured at Server' })
  async deleteUser(@Param('id') id: number) {
    return await this.userService.deleteUser(id);
  }
}
