import { Component, OnInit } from '@angular/core';
import {Store, Action} from '@ngrx/store'
import { AppState } from './reducers/app.reducer'
import * as fromContador from '../contador/contador.actions'

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  contador:number;
  constructor(public store:Store<AppState>) { }

  ngOnInit() {
    this.store.select("contador").subscribe(contador=>{
      this.contador=contador;
    })
  }
  reset(){
    const action = new fromContador.ResetAction;
    this.store.dispatch(action);
  }

}