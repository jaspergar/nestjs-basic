import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/User';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
     //dependency injection 
     constructor (private readonly usersService : UsersService){}

    @Get()
    getAllUsers(@Query('name') name?:string) : User[]{
        return this.usersService.findAll(name);
    }
    
    @Get(':id')               //Parse ID in Pipe from string to int
    getUserById(@Param('id' , ParseIntPipe) id: number): User{ 
           return this.usersService.findById(id);
    }

    @Post()
    create(@Body() body : CreateUserDto) : User{
           return this.usersService.createUser(body);
    }
}
