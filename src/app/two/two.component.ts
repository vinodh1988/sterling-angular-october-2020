import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  @Input('menuitem') title:string="Dummy Text";  //Input Directive [menuitem]
  @Input() color:string="lightgreen";
  constructor() { }

  ngOnInit(): void {
  }

}
