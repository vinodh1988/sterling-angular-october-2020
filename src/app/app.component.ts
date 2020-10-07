import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angy App';
  programmers:string[] = ["Rahul","Bhargav","Manish","Harish"];
  themes:any[] =[
     {backgroundColor: "yellow", color: "red"},
     {backgroundColor: "lightblue", color: "darkblue"},
     {backgroundColor: "tomato", color: "blue"}
  ]
  current:any = this.themes[1];
  currentIndex:number =1;

  menuitems:string[] = ["Projects", "Achievements","Products","Career","Social"];
  menucolors:string[] = ["#26787F","#4A31E9","#AEE931","#E93166","#E93142"];
  changeTheme(index?){

    if(index==undefined)
      index =this.currentIndex;
     else
       this.currentIndex =index;
    this.current =this.themes[index];
  }
}

