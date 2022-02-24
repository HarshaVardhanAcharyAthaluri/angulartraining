import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoService } from './demo.service';
import { DemoComponent } from './democomponent';
import { FirstComponent } from './first/first.component';
import { IsadultPipe } from './isadult.pipe';
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,DemoComponent, FirstComponent, IsadultPipe, SearchComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
