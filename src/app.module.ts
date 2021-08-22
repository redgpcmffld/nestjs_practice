import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig), // typeorm config import
    BoardsModule //BoardsModule import 
  ], 
  controllers: [],
  providers: [],
})
export class AppModule {} //root Module
