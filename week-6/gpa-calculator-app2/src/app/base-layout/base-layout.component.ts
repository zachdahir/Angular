/**
 * Title: 6.4
 * Author: Zachary Dahir
 * Date: 8-13-20
 * Description: base-layout
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string
  constructor() {
    this.assignment = 'Exercise 6.4 - Input Properties';
  }


  ngOnInit(): void {
  }

}
