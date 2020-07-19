/**
 * Title: Assignment 2.4
 * Author: Zachary Dahir
 * Date: 7-18-20
 * Description: Composer list component
 */

import { Component, OnInit } from '@angular/core';

//creat class
export default class Composer {
  fullName: string;
  genre: string;

//composer constructor
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

//Composer array
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer('Claude Debussey', 'Classical'),
      new Composer('Ludovico Einaudi', 'Contemporary'),
      new Composer('Yann Tiersen', 'Avant-garde'),
      new Composer('Hans Zimmer', 'Film-Score'),
      new Composer('Fredric Chopin', 'Classical')
    ]
  }

  ngOnInit(): void {
  }

}
