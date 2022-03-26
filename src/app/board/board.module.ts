import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';

import { BoardItemComponent } from './board-item/board-item.component';
import { BoardComponent } from './board/board.component';
import { DialogModule } from '../components/dialog/dialog.module';
import { BoardRoutingModule } from './board-routing.module';


@NgModule({
  declarations: [
    BoardComponent,
    BoardItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    DragDropModule,
    MatExpansionModule,
    FormsModule,
    DialogModule,
    BoardRoutingModule
  ],
  exports: [
    BoardComponent    /* почему экспортируем только боардкомпонент */
  ]
})
export class BoardModule { }
