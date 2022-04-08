import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromApp from './app.reducer';
  
  export interface State {
    app: fromApp.State
  }
  
  export const reducers: ActionReducerMap<State> = {
    app: fromApp.reducer
  };
  
  
  export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
  export const getAppState = createFeatureSelector<fromApp.State>('app');

  /* user selectors */
export const getBoardSelector = createSelector(  getAppState, fromApp.getBoard );
export const getColumnSelector = createSelector(  getAppState, fromApp.getColumn );
  