import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Output() emitTextTitle: EventEmitter<string> = new EventEmitter();
  @Input() question: string;

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogBodyComponent, {
      width: '500px',
      data: {question: this.question},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.emitTextTitle.emit(result);
    });
  }
  
}
