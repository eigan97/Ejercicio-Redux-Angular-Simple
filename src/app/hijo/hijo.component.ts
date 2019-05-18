import { Component, OnInit } from '@angular/core';
import {Store, Action} from '@ngrx/store'
import { AppState } from '../reducers/app.reducer'
import * as fromContador from '../contador/contador.actions'



@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  contador:number;
  constructor(private store:Store<AppState>) { 

  }

  ngOnInit() {
    this.store.select('contador').subscribe((contador)=>{
      this.contador=contador;
    })
  }
  multiplicar(){
    const action = new fromContador.MultiplicarAction(2);
    this.store.dispatch( action );
  }
  dividir(){
    const action = new fromContador.DividirAction(2);
    this.store.dispatch( action );
  }

}