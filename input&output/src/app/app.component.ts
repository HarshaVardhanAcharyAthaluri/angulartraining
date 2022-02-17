import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemFromCHild:any;

  username:any;

  submitUserName(usr:any){
    this.username = usr;
  }



  catchdata(dta:any){
     this.itemFromCHild = dta;
  }

}
