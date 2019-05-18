import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//redux
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { contadorReducer } from './contador/contador.reducer';
import { HijoComponent } from './hijo/hijo.component';
import { NietoComponent } from './nieto/nieto.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  StoreModule.forRoot({contador: contadorReducer}), 
  StoreDevtoolsModule.instrument() ],
  declarations: [ AppComponent, HelloComponent, HijoComponent, NietoComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
/*
StoreDevtoolsModule.instrument({
  maxAge:25,
  logOnly:enviroment.production
})
*/ 