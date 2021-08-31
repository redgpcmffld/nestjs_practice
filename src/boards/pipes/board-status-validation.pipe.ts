import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board-status.enum";

export class BoardStatusValidationPipe implements PipeTransform {

  readonly StatusOptions = [
    BoardStatus.PRIVATE,
    BoardStatus.PUBLIC
  ]
  
  private isStatusValid(status: any) {
    return this.StatusOptions.includes(status);
  }
  
  transform(value: any, metadata: ArgumentMetadata) {

    value.status = value.status.toUpperCase();

    if (!this.isStatusValid(value.status)) {
      throw new BadRequestException(`${value.status} isn't in the status options`);
    }

    return value
  }
}