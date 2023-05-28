import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUserDto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<void>;
    findOne(id: string): Promise<import("./user.entity").User>;
    create(createCatDto: CreateUserDto): Promise<void>;
}
