export interface IBoard {
    id: number;
    title: string;
    color: string;
    list: IList[];
  }
export interface IList{
    id: number;
    text: string;
    like: number;
    comments: IComments[];
  }
export interface IComments{
    id: number;
    text: string;
  }