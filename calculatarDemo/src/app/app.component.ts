import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
result:number = 0;

addition (no1:string,no2:string){
  this.result = Number(no1)+Number(no2);
}




}
