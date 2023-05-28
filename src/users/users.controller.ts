import {  Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, NotFoundException, Param, Post, UseFilters, UsePipes} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUserDto';
import { HttpExceptionFilter } from 'src/exceptions/http-exeption.filter';
import { BadRequestExceptionFilter } from 'src/exceptions/bad-request-exception.filter';

@Controller('users')
@ApiTags('Users')
@UseFilters( BadRequestExceptionFilter, NotFoundException )
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll() {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a ussual message',
      }, HttpStatus.FORBIDDEN);
    }

    @Get(':id')
    @UseFilters(new HttpExceptionFilter())
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }
    
    @Post()
    @UseFilters(new HttpExceptionFilter())
    async create(@Body() createCatDto: CreateUserDto) {
      throw new ForbiddenException();
    }
    
}