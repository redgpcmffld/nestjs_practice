import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig), // typeorm config import
    BoardsModule, AuthModule //BoardsModule import 
  ], 
  controllers: [],
  providers: [],
})
export class AppModule {} //root Module
