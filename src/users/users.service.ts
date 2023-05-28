import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/CreateUserDto";

@Injectable()
export class UsersService {
    constructor(
      @InjectRepository(User)
      private readonly userRepository: Repository<User>, 
      ) {}
      
      async create(userDto: CreateUserDto): Promise<User>{
        const user = this.userRepository.create();
        user.name = userDto.name; 
        user.email = userDto.email;
        user.age = userDto.age;
        await this.userRepository.save(user); 
        return user; 
      }
      
      findOne(id: number): Promise<User> {
        return this.userRepository.findOne({
          where: { id }, 
        });
      }
      
      async findAll(): Promise<User[]> {
      const users = await this.userRepository.find(
        {}
        ); 
      return users; 
    }

}
