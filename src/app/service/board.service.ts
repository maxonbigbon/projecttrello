import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IBoard } from "../types";

@Injectable({
    providedIn: "root"
})

export class BoardService{
    private initBoard = [
        {
            id:1,
            title: 'To Do',
            color: '#e92c62',
            list:[
                {
                    id:1,
                    text:'Example text from To Do 1',
                    like:4,
                    comments:[
                        {
                            id:1,
                            text:'Some comment from To Do 1 1/2'
                        },
                        {
                            id:2,
                            text:'Some comment from To Do 1 2/2'
                        }
                    ]
                },
                {
                    id:2,
                    text:'Example text from To Do 2',
                    like:3,
                    comments:[
                        {
                            id:1,
                            text:'Some comment from To Do 2 1/3'
                        },{
                            id:2,
                            text:'Some comment from To Do 2 2/3'
                        },{
                            id:3,
                            text:'Some comment from To Do 2 3/3'
                        }
                    ]
                }
            ]


        },
        {
            id:2,
            title: 'Done',
            color: '#e92c22',
            list:[
                {
                    id:1,
                    text:'Example text from Done',
                    like:2,
                    comments:[
                        {
                            id:1,
                            text:'Some comment from Done 1/2'
                        },
                        {
                            id:2,
                            text:'Some comment from Done 2/2'
                        }
                    ]
                }
            ]


        }
    ];

    addColumn(title: string){
        const newColumn: any = {
            id: Date.now(),
            title: title,
            color: '#e92c62',
            list: []
        };
        this.board = [...this.board,newColumn]
        this.board$.next([...this.board])
    };

    addCard(text: string, columnId: number){
        const newCard: any = {
            id: Date.now(),
            text,
            like: 0,
            comments: []
        };
        this.board = this.board.map((column: IBoard) => {
            if(column.id === columnId) {
                column.list = [newCard,...column.list]
            }
            return column
        });
        this.board$.next([...this.board])
            
    };

    deleteColumn(columnId: number){
        this.board = this.board.filter((column: any) => column.id !== columnId);
        this.board$.next([...this.board])
    };

    deleteCard(cardId:number, columnId:number){
        this.board = this.board.map((column: IBoard) => {
            if(column.id === columnId) {
                column.list = column.list.filter((card:any) => card.id !== cardId);
            }
            return column
        });
        this.board$.next([...this.board])
    };


    changeLike(cardId:number,columnId:number,increase:boolean){
        this.board = this.board.map((column:any)=>{
            if(column.id===columnId){
                const list = column.list.map((card: any)=>{
                    if(card.id===cardId){
                        if(increase){
                            ++card.like;
                        }else{
                            if(card.like>0){
                                card.like--
                            }
                        }
                    }
                    return card
                });
            column.list = list /* начиная с отсюда непонятно */
            return column
            }else{
                return column  
            }

        });
        this.board$.next([...this.board])
    }

    addComment(columnId: number,cardId: number,text:string){
        this.board = this.board.map((column:any)=>{
            if(column.id === columnId){
                const list = column.list.map((card: any)=>{
                    if(card.id === cardId){
                        const newComment = {
                            id: Date.now(),
                            text
                        };
                        card.comments = [newComment,...card.comments]
                    };
                    return card
                });
                column.list = list /* почему не возвращаем? если просто эту строчку не писать?*/
            };
            return column;
        });
        this.board$.next([...this.board])
      }
      

    deleteComment(columnId: number, itemId: number, commentId: number) {
        this.board = this.board.map((column) => {
          if(column.id === columnId) {
            const list = column.list.map((item)=> {
              if(item.id === itemId) {
                item.comments = item.comments.filter((comment) => {
                  return comment.id !== commentId
                })
              }
              return item
            })
            column.list = list
          }
          return column
        })
        this.board$.next([...this.board])
      }


    private board: IBoard[] = this.initBoard;  /* говорили про массивы, почему тут не в  массив запись ссылки */
    private board$= new BehaviorSubject<IBoard[]>(this.initBoard);
    getBoard$(){
        return this.board$.asObservable() /* не понятно что такое эсобсервбл */
    };

}