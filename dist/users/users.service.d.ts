import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/CreateUserDto";
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(userDto: CreateUserDto): Promise<User>;
    findOne(id: number): Promise<User>;
    findAll(): Promise<User[]>;
}
