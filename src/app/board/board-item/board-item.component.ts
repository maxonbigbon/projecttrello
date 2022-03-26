import { Component, OnInit, Input ,Output ,EventEmitter} from '@angular/core';
import { IList } from 'src/app/types';


@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit {
  @Input() item: IList;
  @Output() emitDeleteCard: EventEmitter<number> = new EventEmitter();
  constructor() { }

  onEmitDeleteCard(id:number){
    this.emitDeleteCard.emit(id)
  };
  ngOnInit(): void {
  }

}
