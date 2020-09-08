import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';
  name = "vaish";

  getName()
  {
    return "Vaishnavi";
    return this.name;
  }
  obj = {
    name : 'vai',
    age : 24
  }

  arr = ['a', 'b', 'c']
  x=10;
  y=20;

  siteurl = window.location.href
}
