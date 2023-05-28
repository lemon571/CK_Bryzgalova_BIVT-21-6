import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatasourceModule } from './datasource/datasource.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './exceptions/http-exeption.filter';

@Module({
  imports: [UsersModule, DatasourceModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})

export class AppModule {}
