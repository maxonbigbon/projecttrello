import { IComments } from './../../types';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { BoardService } from 'src/app/service/board.service';
import { IBoard,IList } from 'src/app/types';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(
    public boardService: BoardService  /* как тут используем конструктор? */
  ) {

  }
/*   onChangeLike(event:{card:any,increase:boolean},columnId:number){
    const {card:{id},increase} = event
    this.boardService.changeLike(id, columnId, increase)
  }; */
  onAddCard(text: string ,columnId:number){
    if(text) {
      this.boardService.addCard(text, columnId)
    }
  };

  onDeleteColumn(columnId:number){
    this.boardService.deleteColumn(columnId)
  };

  onDeleteCard(cardId: number,columnId:number){
    this.boardService.deleteCard(cardId, columnId)
  };

  onChangeLike(event:{card:any,increase:boolean},columnId:number){
    this.boardService.changeLike(event.card.id, columnId, event.increase)
  };

  onAddComment(event:{id:number,text:string},columnId:number){
    this.boardService.addComment(columnId,event.id,event.text)

  };
  onDeleteComment(comment: IComments, columnId: number, item: IList){
    this.boardService.deleteComment(columnId,item.id,comment.id)
  }

  drop(event: CdkDragDrop<IList[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  ngOnInit(): void {}
}
