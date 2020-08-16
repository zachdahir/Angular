/**
 * Title: 5.4
 * Author: Zachary Dahir
 * Date: 8-06-20
 * Description: app ts
 */

//import statements
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//title assignment
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.2 - Input/Output Properties, Part 1'
  }

}
