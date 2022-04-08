export interface IBoard {
    id: number;
    title: string;
    lists: IList[];
  }
export interface IList{
    id: number;
    text: string;
  }
export interface ICardBoard{
    id: number;
    title: string;
    columns: IBoard[]
  }