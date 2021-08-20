// BoardStarts enum
export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRAVATE = 'PRAVATE',
}

//Board Model interface
export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}
