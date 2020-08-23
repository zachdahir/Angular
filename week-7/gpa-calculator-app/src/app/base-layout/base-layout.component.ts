/**
 * Title: 7.2
 * Author: Zachary Dahir
 * Date: 8-17-20
 * Description: base-layout
 */

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

export class BaseLayoutComponent implements OnInit {

  //assignment variable
  assignment: string

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'GPA Calculator';
  }


  ngOnInit(): void {
  }

  //function to signout and delete cookies
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['./session/sign-in']);
  }

}
