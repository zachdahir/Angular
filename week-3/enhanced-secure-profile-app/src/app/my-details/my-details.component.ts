/**
 * Title: my-details.component.ts
 * Author: Zachary Dahir
 * Date: 7-22-20
 * Description: my details component
 */
import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
  "#TypeScript", "#2020", "#CodingWIthAngular", "#ngOmaha"
  ];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string){
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString(){
    console.log('\n Full Name: ${this.fullName}\n Favorite Food: ${this.favoriteFood} \n Favorite Color: ${this.favoriteColor}');
  };
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person('Zachary Dahir', 'Chicken Fried Rice', 'Green');
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
