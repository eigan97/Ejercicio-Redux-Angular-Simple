import { Component } from '@angular/core';
import {Store, Action} from '@ngrx/store'
import * as fromContador from './contador/contador.actions'
import { AppState } from './reducers/app.reducer'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  contador:number;
  constructor(private store:Store<AppState>){
    this.store.select('contador').subscribe(contador=>{
      this.contador=contador;
    })
  }
  incrementar(){
    const action = new fromContador.IncrementarAction();
    this.store.dispatch( action );
  }
  decrementar(){
    const action = new fromContador.DecrementarAction();
    this.store.dispatch( action );
  }
}
