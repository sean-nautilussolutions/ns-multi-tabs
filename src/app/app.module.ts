import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NsMultiTabsModule } from 'ns-multi-tabs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NsMultiTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
