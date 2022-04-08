import { IBoard , ICardBoard} from './../../types';
import { createReducer, on } from '@ngrx/store';
import { AppAction } from '../actions';

export interface State {
  boards: ICardBoard[]
}

export const initialState: State = {
    boards: []
};


export const reducer = createReducer(
  initialState,
  on(AppAction.addCardBoard, (state,action) =>{
    const newCard={
        id: Date.now(),
        title: action.text,
        columns: []
    };
    return {
      ...state,
    boards:[...state.boards,newCard]}
    
  }),
  on(AppAction.addColumn, (state,action) => {
    const newColumn = {
      id: Date.now(),
      title: action.text,
      lists: []
  };
    const b = state.boards
    const updateBoards = b.map((board)=> {if(board.id.toString()== action.cardId){
      board = {...board, columns:[...board.columns, newColumn]} /* избавились от ссылки, тем что перебираемый объект, добавили в объект*/
  };
  return board
  });

  return {
    ...state,
    boards: updateBoards
  }
  }),
  on(AppAction.addCard, (state, action) => {
    const newItem={
      id: Date.now(),
      text: action.text
    };
    const b = state.boards
    const updateBoards = b.map((board)=>{if(board.id.toString()===action.cardId){
      board = {...board,columns:[...board.columns.map((column)=>{if(column.id===action.columnId){
        column = {...column, lists:[...column.lists,newItem]}
      };return column})]}
    };
  return board
  });

    return {
      ...state,
      boards: updateBoards
    };
  }),
  on(AppAction.deleteCardBoard, (state,action) => ({
    ...state,
    boards: state.boards.filter((card: any) => card.id !== action.cardId)
  })),
  on(AppAction.deleteColumn, (state,action) => {
    const b = state.boards
    const updateBoards = b.map((board)=> {
      if(board.id.toString()== action.cardId){
        board = {...board, columns:[...board.columns.filter((card: any) => card.id.toString() !== action.columnId.toString())]}
    };
    return board
    });
    return {
      ...state,
      boards: updateBoards
    }
  }),
  on(AppAction.deleteCard, (state, action) => {
    const b = state.boards
    const updateBoards = b.map((board)=>{if(board.id.toString()===action.cardId){
      board = {...board,columns:[...board.columns.map((column)=>{if(column.id===action.columnId){
        column = {...column, lists:[...column.lists.filter((item)=>item.id.toString()!==action.itemId.toString())]}
      };return column})]}
    };
  return board
  });

    return {
      ...state,
      boards: updateBoards
    };
  })
);
export const getBoard = (state: State) => state.boards;
export const getColumn = (state: State) => state.boards[0].columns;