import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [DatasourceModule],
})
export class UsersModule {}
