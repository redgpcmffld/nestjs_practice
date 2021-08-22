import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { NotFoundException } from '@nestjs/common';
import { UpdateBoardDto } from './dto/update-board.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  
  async getAllBoards(): Promise<Board[]> {
    return await this.find();
  }

  async getBoard(id: number): Promise<Board> {
    const found = await this.findOne(id);

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}'s`);
    }
    return found;
  }

  async createBoard(CreateBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = CreateBoardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.save(board);
    return board;
  }

  async updateBoard(id: number, UpdateBoardDto: UpdateBoardDto): Promise<Board> {
    const board = await this.getBoard(id);
    const { title, description, status } = UpdateBoardDto;

    board.title = title,
    board.description = description,
    board.status = status

    await this.save(board);

    return board;
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }
}
