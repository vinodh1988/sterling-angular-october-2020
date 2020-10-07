import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  @Input('menuitem') title:string="Dummy Text";  //Input Directive [menuitem]
  @Input() color:string="lightgreen";
  @Output("listen")    communicator:EventEmitter<String> =new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
     this.communicator.emit(this.title + " is clicked");
  }
}
