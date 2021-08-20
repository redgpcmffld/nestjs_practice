import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';

function makeRandomID() {
  return Math.random().toString(36).substr(2, 16); // 간단 랜덤 아이디 생성
}

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // 외부 접근 막기 위해 private 선언, 타입 = Board, 초기값 []

  getAllBoards(): Board[] {
    return this.boards;
  }

  getBoard(id: string): Board {
    return this.boards.find((board) => board.id === id); // id가 일치하는 board 객체 리턴
  }

  createBoard(CreateBoardDto) {
    const {title, description}  = CreateBoardDto
    const board: Board = {
      id: makeRandomID(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board); //boards list에 신규 객체 push
    return board;
  }

  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id); //filter method를 통해 id가 해당하는 객체를 제외한 모든 객체를 리턴
  }

  updateBoard(id: string, UpdateBoardDto): Board {
    const board = this.getBoard(id);
    const {title, description, status} = UpdateBoardDto
    board.status = status;
    board.title = title;
    board.description = description;
    return board
  }
}
