/* import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IBoard , ICard , IList} from "../types";
import { map } from 'rxjs/operators';
import { ActivatedRoute } from "@angular/router";

@Injectable({
    providedIn: "root"
})

export class BoardService{ */

    /* id: string;
    constructor(public activateRoute: ActivatedRoute){
         
        this.id = activateRoute.snapshot.params['id'];
    } */
    /* private board: ICard[] = [
        
    ];

    addCardBoard(title: string){
        const newCard: any = {
            id: Date.now(),
            title: title,
            column:[]
        };
        this.listsBoard = [...this.listsBoard,newCard]
        this.listsBoard$.next([...this.listsBoard])
    };

    addColumn(title: string, id: string){
        const newColumn: any = {
            id: Date.now(),
            title: title,
            list: []
        };
        const findBoardIndex = this.listsBoard.findIndex(board => board.id.toString()=== id);
        this.listsBoard[findBoardIndex].column = [...this.listsBoard[findBoardIndex].column, newColumn]
        this.listsBoard$.next([...this.listsBoard])
    };


    addCard(text: string, columnId: number, id: string){
        const newCard: any = {
            id: Date.now(),
            text
        };
        this.listsBoard = this.listsBoard.map((board:ICard)=>{
            if(board.id.toString()===id){
                board.column = board.column.map((card)=>{
                    if(card.id===columnId){
                        card.list = [...card.list,newCard]
                    }
                    return card
                })
            }
                return board
        });
        this.listsBoard$.next([...this.listsBoard])       
    };

    deleteCardBoard(cardId: number){
        this.listsBoard = this.listsBoard.filter((card: any) => card.id !== cardId);
        this.listsBoard$.next([...this.listsBoard])
    };

    deleteColumn(boardId: string, columnId: number){
        this.listsBoard = this.listsBoard.map((board: any) => {
            if(board.id.toString() === boardId) {
                board.column = board.column.filter((column:any) => column.id !== columnId);
            }
            return board
        });
        this.listsBoard$.next([...this.listsBoard])
    };

    deleteCard(boardId: string, cardId:number, columnId:number){
        this.listsBoard = this.listsBoard.map((board: any) => {
            if(board.id.toString() === boardId) {
                board.column = board.column.map((column:any) =>{
                    if(column.id===columnId){
                        column.list = column.list.filter((card:any) => card.id !== cardId);
                    }
                    return column    
                }); 
                
            }
            return board
        });
        this.listsBoard$.next([...this.listsBoard])
    };


    private listsBoard: ICard[] = this.board;
    private listsBoard$= new BehaviorSubject<ICard[]>(this.listsBoard);
    getListsBoard$(){
        return this.listsBoard$.asObservable()
    };
    getBoard$(id:string){
        return this.listsBoard$.asObservable()
        .pipe(
            map((listsBoard: ICard[])=>{
                const findElement = listsBoard.find(board=> board.id.toString()===id)
                return findElement ? findElement.column:[]
            })
        )
    }

} */