import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListBoardComponent } from './list-board/list-board/list-board.component';
import { BoardComponent } from './board/board/board.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./list-board/list-board.module').then(m => m.ListBoardModule),
  },
  {
    path: 'b',
    loadChildren: () => import('./board/board.module').then(m => m.BoardModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
