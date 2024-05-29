import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PolariFlowLibModule } from 'polari-flow-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PolariFlowLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
