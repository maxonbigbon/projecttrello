import { ICardBoard } from './../../types';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { IBoard,IList } from 'src/app/types';
import { ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';
import { AppAction } from 'src/app/_store/actions';
import { Observable } from 'rxjs';
import * as fromApp from '../../_store/reducers'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(
    public activateRoute: ActivatedRoute,
    private store: Store){
    }

  getColumnState$: Observable<any[]> = this.store.select(fromApp.getColumnSelector);/* какие типы писать в Observable. я запутался */

  onAddCard(text: string ,columnId:number){
    const id: string = this.activateRoute.snapshot.params['id'];
    this.store.dispatch(AppAction.addCard({cardId: id,columnId: columnId,text:text}));
  };

  onDeleteColumn(columnId:number){
    const id: string = this.activateRoute.snapshot.params['id'];
    this.store.dispatch(AppAction.deleteColumn({cardId:id, columnId:columnId}));
  };

  onDeleteCard(itemId: number, columnId:number){
    const id: string = this.activateRoute.snapshot.params['id'];
    this.store.dispatch(AppAction.deleteCard({cardId: id,columnId: columnId, itemId:itemId}));
  };

  drop(event: CdkDragDrop<any[]>) {
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
