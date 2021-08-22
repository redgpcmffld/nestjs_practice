import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoardRepository])
  ],
  controllers: [BoardsController], // Controller injection
  providers: [BoardsService] // service 등 providers injection
})
export class BoardsModule {}
