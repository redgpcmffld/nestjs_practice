import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { NotFoundException } from '@nestjs/common';
import { UpdateBoardDto } from './dto/update-board.dto';
import { User } from 'src/auth/user.entity';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  

  async getAllBoards(): Promise<Board[]> {
    return this.find();
  }

  async getMyBoards(user: User): Promise<Board[]> {
    const query = this.createQueryBuilder('board');

    query.where('board.userId = :userId', {userId: user.id});

    const boards = await query.getMany();
    return boards
  }

  async getBoard(id: number): Promise<Board> {
    const found = await this.findOne(id);

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}'s`);
    }
    return found;
  }

  async createBoard(CreateBoardDto: CreateBoardDto, user: User): Promise<Board> {
    const { title, description } = CreateBoardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user
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

  async deleteBoard(id: number, user:User): Promise<void> {
    const result = await this.delete({id, user});

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }
}
