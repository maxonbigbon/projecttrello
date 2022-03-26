export interface IBoard {
    id: number;
    title: string;
    list: IList[];
  }
export interface IList{
    id: number;
    text: string;
  }
export interface ICard{
    id: number;
    title: string;
    column: IBoard[]
  }