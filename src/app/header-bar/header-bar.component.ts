import { Component, OnInit } from '@angular/core';
import { headers } from '../headers';
@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  headers = headers;
  constructor() { }

  ngOnInit() {
    
  }
    answer(name) {
    if (name === "Me")
     window.alert("I am " + name);
    else if (name === "You")
    window.alert("No, no... you're not me! You are you!");
    else if (name === "Everyone")
    window.alert("Don't be silly! You can't be everyone! Make a decision!")
  }

}