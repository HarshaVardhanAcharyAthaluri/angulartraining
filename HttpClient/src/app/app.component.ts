import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users:any;
  constructor(private service:DemoService){

  }

  displayUsers(){
    this.service.getUsers().subscribe(data=>{
      this.users = data
    });
  }
}
