import { IsNotEmpty} from "class-validator";
import { BoardStatus } from "../board-status.enum";

export class UpdateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: BoardStatus;
}