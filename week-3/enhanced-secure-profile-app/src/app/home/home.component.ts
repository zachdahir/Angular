/**
 * Title: app.home.component.ts
 * Author: Zachary Dahir
 * Date: 7-22-20
 * Description: Home component
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

}
