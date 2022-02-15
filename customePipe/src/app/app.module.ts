import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './democomponent';
import { FirstComponent } from './first/first.component';
import { IsadultPipe } from './isadult.pipe';

@NgModule({
  declarations: [
    AppComponent,DemoComponent, FirstComponent, IsadultPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,DemoComponent,FirstComponent]
})
export class AppModule { }
