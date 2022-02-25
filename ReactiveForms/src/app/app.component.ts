import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  signupform:FormGroup = new FormGroup({});
 


  ngOnInit(){
    this.signupform = new FormGroup({
          'usr':new FormControl(null,Validators.required),
          'email':new FormControl(null,[Validators.requiredTrue,Validators.email]),
          'pwd':new FormControl
    });


    
  }


  submitdata(){
    console.log(this.signupform);
  }

}
