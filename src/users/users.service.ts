import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/User';

@Injectable()
export class UsersService {
    private users : User[] = [{id : 1,name:"jasper"} , {id : 2 , name : "jayde"}];

    findAll(name?:string) : User[]{
        if(name){
           return this.users.filter(user => user.name === name);
        }
        return this.users
    }

    findById(id : number) : User {

        const user = this.users.find(user => id === user.id); 

            if(!user){
              throw new NotFoundException;
            }
            
            return user
    
    }

    createUser(createUserDto : CreateUserDto) : User{
        const newUser = {id: Date.now() , ...createUserDto}

        this.users.push(newUser);

        return newUser;
    }
}
