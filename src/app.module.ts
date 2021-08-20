import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [BoardsModule], //BoardsModule import
  controllers: [],
  providers: [],
})
export class AppModule {} //root Module
