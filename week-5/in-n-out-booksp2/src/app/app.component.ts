/**
 * Title: 5.3
 * Author: Zachary Dahir
 * Date: 8-05-20
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
    this.assignment = 'Exercise 5.3 - Data Tables'
  }

}
