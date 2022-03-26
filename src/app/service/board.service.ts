import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IBoard , ICard} from "../types";
import { map } from 'rxjs/operators';
import { ActivatedRoute } from "@angular/router";

@Injectable({
    providedIn: "root"
})

export class BoardService{

    /* id: string;
    constructor(public activateRoute: ActivatedRoute){
         
        this.id = activateRoute.snapshot.params['id'];
    } */
    private board: ICard[] = [
        {
            id: 1,
            title: "Board",
            column: [
                {id:1,
                    title: 'To Do',
                    list:[
                        {
                            id:1,
                            text:'Example text from To Do'
                        }
                    ]}
            ]
        }
    ];

    addCardBoard(title: string){
        const newCard: any = {
            id: Date.now(),
            title: title
        };
        this.listsBoard = [...this.listsBoard,newCard]
        this.listsBoard$.next([...this.listsBoard])
    };

    addColumn(title: string, id: string){
        console.log(id)
        const newColumn: any = {
            id: Date.now(),
            title: title,
            list: []
        };
        const findBoardIndex = this.listsBoard.findIndex(board => board.id.toString()=== id);
        this.listsBoard[findBoardIndex].column = [...this.listsBoard[findBoardIndex].column, newColumn]
        this.listsBoard$.next([...this.listsBoard])
    };


    addCard(text: string, columnId: number){
        const newCard: any = {
            id: Date.now(),
            text
        };
        this.listsBoard = this.listsBoard.map((column: any) => {
            if(column.id === columnId) {
                column.list = [newCard,...column.list]
            }
            return column
        });
        this.listsBoard$.next([...this.listsBoard])       
    };

    deleteCardBoard(cardId: number){
        this.listsBoard = this.listsBoard.filter((card: any) => card.id !== cardId);
        this.listsBoard$.next([...this.listsBoard])
    };

    deleteColumn(columnId: number){
        this.board = this.board.filter((column: any) => column.id !== columnId);
        this.listsBoard$.next([...this.listsBoard])
    };

    deleteCard(cardId:number, columnId:number){
        this.listsBoard = this.listsBoard.map((column: any) => {
            if(column.id === columnId) {
                column.list = column.list.filter((card:any) => card.id !== cardId);
            }
            return column
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

}