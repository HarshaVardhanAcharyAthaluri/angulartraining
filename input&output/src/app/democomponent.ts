import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'demo-comp',
    templateUrl:'./demo.html'
})
export class DemoComponent{

    @Input()
    temp:any=null;

    @Output()
    ouputitem = new EventEmitter();

    releasedate(itm:any){
        this.ouputitem.emit(itm);
    }

}