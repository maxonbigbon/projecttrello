import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBoardComponent } from './list-board/list-board.component';

const routes: Routes = [
    {
        path: '',
        component: ListBoardComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListBoardRoutingModule { }