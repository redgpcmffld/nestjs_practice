import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board-status.enum";

export class BoardStatusValidationPipe implements PipeTransform {

  readonly StatusOptions = [
    BoardStatus.PRIVATE,
    BoardStatus.PUBLIC
  ]
  
  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
  
  transform(value: any, metadata: ArgumentMetadata) {

    value.status = value.status.toUpperCase();

    if (!this.isStatusValid(value.status)) {
      throw new BadRequestException(`${value.status} isn't in the status options`);
    }

    return value
  }
}