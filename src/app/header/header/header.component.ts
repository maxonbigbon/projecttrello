import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/service/board.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(public boardService: BoardService,
              public activateRoute: ActivatedRoute
    ) { }

  get hiddenBoard(): boolean {
    return window.location.pathname === '/'
  };

  ngOnInit(): void {
  }

  onAddBoard(event: string){
    if(event) {
      this.boardService.addCardBoard(event)
    }
  }
  
  onAddColumn(event: string){
    if(event) {
      const id = window.location.pathname.replace('/b/','')
      this.boardService.addColumn(event,id)
    }
  }
}
