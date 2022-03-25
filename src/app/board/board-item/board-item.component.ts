import { Component, OnInit, Input ,Output ,EventEmitter} from '@angular/core';
import { IList } from 'src/app/types';


@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit {
  @Input() item: IList;
  @Output() emitText: EventEmitter<{id: number, text: string}> = new EventEmitter();
  @Output() emitCardItem: EventEmitter<{card: any, increase: boolean}> = new EventEmitter();
  @Output() emitDeleteCard: EventEmitter<number> = new EventEmitter();
  commentInput = '';
  open = false;

  constructor() { }


  onEmitDeleteCard(id:number){
    this.emitDeleteCard.emit(id)
  };

  onEmitCardItem(card: any, increase: boolean){
    this.emitCardItem.emit({card, increase})
  }

  onCommentTextEmit(id: number){         /*  почему в метод не указываем аргумент text? а добавляем его уже после */
    this.emitText.emit({id,text: this.commentInput})
    this.commentInput = '';
  }

  onOpenComment(){
    this.open = !this.open
  }


  ngOnInit(): void {
  }

}
