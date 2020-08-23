/**
 * Title: 7.2
 * Author: Zachary Dahir
 * Date: 8-17-20
 * Description: sign in service
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  //create array
  studentIds: Array<number>;

  constructor() {
    //populate array
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
   }

  //validate that student id is in array
   validate(studentId: number) {
     return this.studentIds.some(id => id === studentId);
   }
}
