import { Controller, Get, Post, Body, Param, Patch, ValidationPipe, UsePipes, ParseIntPipe, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get('path')
    async users(){
        return await this.userService.findAll()
    }

    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() body: CreateUserDto){
        return await this.userService.createData(body)
    }

    @UsePipes(ValidationPipe)
    @Patch('/:id')
    async updateUser(@Param('id', ParseIntPipe) id, @Body() body){
        return await this.userService.updateData(id, body)
    }

    @UsePipes(ValidationPipe)
    @Delete('/:id')
    async deleteUser(@Param('id', ParseIntPipe) id){
        return await this.userService.deleteUser(id)
    }
}
