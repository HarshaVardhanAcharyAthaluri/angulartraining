import { typeWithParameters } from "@angular/compiler/src/render3/util";
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
    selector:'demo-comp',
    templateUrl:'./demo.html'
})
export class DemoComponent implements OnChanges,OnInit{

    @Input()
    userdata:any;

    
    ngOnChanges(change:SimpleChanges){
        console.log('Its from ngOnchange');
        console.log(change);
    }
 
    ngOnInit(){
        this.userdata = 'Intial Value';
    }
}