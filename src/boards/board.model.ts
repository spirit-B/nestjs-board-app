export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

// 게시물의 상태 : 공개, 비공개
export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
