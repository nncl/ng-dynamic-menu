import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicMenuComponent } from './components/dynamic-menu/dynamic-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
