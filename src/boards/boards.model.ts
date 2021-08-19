export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRAVATE = 'PRAVATE',
}
export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}
