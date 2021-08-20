import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  controllers: [BoardsController], // Controller injection
  providers: [BoardsService] // service 등 providers injection
})
export class BoardsModule {}
