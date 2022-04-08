import { createAction, props } from '@ngrx/store';



export const addCardBoard = createAction(
    '[ADD] Add CardBoard',
    props<{text: string}>()
);

export const addColumn = createAction(
    '[ADD] Add Column',
    props<{text: string,cardId:string}>()
);

export const addCard = createAction(
    '[ADD] Add Card',
    props<{cardId:string, columnId: number, text: string}>()
);

export const deleteCardBoard = createAction(
    '[DEL] Delete CardBoard',
    props<{cardId:number}>()
);
  
export const deleteColumn = createAction(
    '[DEL] Delete Column',
    props<{cardId:string, columnId:number}>()
);
  
export const deleteCard = createAction(
    '[DEL] Delete Card',
    props<{cardId: string,columnId: number, itemId:number}>()
);