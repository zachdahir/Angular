/**
 * Title: 6.4
 * Author: Zachary Dahir
 * Date: 8-13-20
 * Description: gpa component
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  //Input for gpa
  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
