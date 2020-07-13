/**
 * Title: Assignment 1.4
 * Author: Zachary Dahir
 * Date: 7-12-20
 * Description: person.class
 */
import { IPerson } from "./person.interface";

class Person implements IPerson {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Zachary", "Dahir");
console.log("My name is " + myName.firstName + " " + myName.lastName);