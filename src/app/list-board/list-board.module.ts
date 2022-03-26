import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBoardComponent } from './list-board/list-board.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DialogModule } from '../components/dialog/dialog.module';


@NgModule({
  declarations: [
    ListBoardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    DialogModule
  ],
  exports: [
    ListBoardComponent
  ]
})
export class ListBoardModule { }
