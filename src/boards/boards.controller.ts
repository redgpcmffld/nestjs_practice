import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
  private logger = new Logger('BoardController')
  constructor(private boardsService: BoardsService) {}
  
  @Get('/')
  getAllBoards(@GetUser() user:User): Promise<Board[]> {
    this.logger.verbose(`User ${user.username} trying get all boards`)
    return this.boardsService.getAllBoards();
  }

  @Get('/mypage')
  getMyBoards(@GetUser() user: User): Promise<Board[]> {
    return this.boardsService.getMyBoards(user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(
    @Body() CreateBoardDto: CreateBoardDto,
    @GetUser() user: User,
  ): Promise<Board> {
    this.logger.verbose(`User ${user.username} creating a new board.
    ${JSON.stringify(CreateBoardDto)}`)
    return this.boardsService.createBoard(CreateBoardDto, user);
  }

  @Put('/:id')
  updateBoard(
    @Param('id', ParseIntPipe) id: number,
    @Body(BoardStatusValidationPipe) UpdateBoardDto: UpdateBoardDto,
  ): Promise<Board> {
    return this.boardsService.updateBoard(id, UpdateBoardDto);
  }

  @Get('/:id')
  getBoard(@Param('id', ParseIntPipe) id: number): Promise<Board> {
    return this.boardsService.getBoard(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number, @GetUser() user:User): Promise<void> {
    return this.boardsService.deleteBoard(id, user);
  }
}
