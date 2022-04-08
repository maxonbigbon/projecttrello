import { Component, OnInit } from '@angular/core';
/* import { BoardService } from 'src/app/service/board.service'; */
import { ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';
import { AppAction } from 'src/app/_store/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(
              public activateRoute: ActivatedRoute,
              private store: Store
    ) { }

  get hiddenBoard(): boolean {
    return window.location.pathname === '/'
  };

  ngOnInit(): void {
  }

  onAddBoard(event: string){
    this.store.dispatch(AppAction.addCardBoard({text: event}));
  }
  
  onAddColumn(event: string){
    const id = window.location.pathname.replace('/b/','')
    this.store.dispatch(AppAction.addColumn({cardId: id,text: event}))
  }
}
