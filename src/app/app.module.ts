import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { BoardModule } from './board/board.module';
import { ListBoardModule } from './list-board/list-board.module';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './_store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
/* import { Effects } from './_store/effects'; */
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BoardModule,
    ListBoardModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    /* EffectsModule.forRoot([Effects]), */
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
