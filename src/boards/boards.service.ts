import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';
import { UpdateBoardDto } from './dto/update-board.dto';
import { User } from 'src/auth/user.entity';


@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  createBoard(CreateBoardDto: CreateBoardDto, user: User): Promise<Board> {
    return this.boardRepository.createBoard(CreateBoardDto, user);
  }

  getAllBoards(): Promise<Board[]> {
    return this.boardRepository.getAllBoards();
  }

  getMyBoards(user: User): Promise<Board[]> {
    return this.boardRepository.getMyBoards(user);
  }

  getBoard(id: number): Promise<Board> {
    return this.boardRepository.getBoard(id);
  }

  updateBoard(id: number, UpdateBoardDto: UpdateBoardDto): Promise<Board> {
    return this.boardRepository.updateBoard(id, UpdateBoardDto);
  }

  deleteBoard(id: number, user:User): Promise<void> {
    return this.boardRepository.deleteBoard(id, user);
  }
}
