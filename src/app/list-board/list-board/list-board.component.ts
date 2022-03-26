import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/service/board.service';

@Component({
  selector: 'app-list-board',
  templateUrl: './list-board.component.html',
  styleUrls: ['./list-board.component.scss']
})
export class ListBoardComponent implements OnInit {

  constructor(public boardService: BoardService) { }

  onDeleteCard(cardId: number){
    this.boardService.deleteCardBoard(cardId);
  }

  ngOnInit(): void {
  }

}
