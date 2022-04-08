import { Component, OnInit } from '@angular/core';
/* import { BoardService } from 'src/app/service/board.service'; */
import { Store } from '@ngrx/store';
import * as fromApp from '../../_store/reducers';
import {AppAction} from '../../_store/actions';
import { Observable } from 'rxjs';
import { ICardBoard } from 'src/app/types';


@Component({
  selector: 'app-list-board',
  templateUrl: './list-board.component.html',
  styleUrls: ['./list-board.component.scss']
})
export class ListBoardComponent implements OnInit {

  constructor(
              private store: Store<fromApp.State>
    ) { }
  getBoardState$: Observable<ICardBoard[]> = this.store.select(fromApp.getBoardSelector);
  onDeleteCard(cardId:number){
    this.store.dispatch( AppAction.deleteCardBoard({ cardId: cardId }));
  }

  ngOnInit(): void {
  }

}
