import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';

function makeRandomID() {
  return Math.random().toString(36).substr(2, 16);
}

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(CreateBoardDto) {
    const {title, description}  = CreateBoardDto
    const board: Board = {
      id: makeRandomID(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
}
