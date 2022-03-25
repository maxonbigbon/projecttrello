import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IComments } from 'src/app/types';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})

export class CommentItemComponent implements OnInit {
  constructor() { }
  @Input() comment: IComments;
  @Output() emitComment: EventEmitter<IComments> = new EventEmitter();
  
  onCommentEmit(comment: IComments){
    this.emitComment.emit(comment)
  }
  ngOnInit(): void {
  }

}
