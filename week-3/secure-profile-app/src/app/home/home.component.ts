/**
 * Title: home.component.ts
 * Author: Zachary Dahir
 * Date: 7-20-20
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

  isLoggedIn: Boolean;
  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'))
  }

  ngOnInit(): void {
  }

}
