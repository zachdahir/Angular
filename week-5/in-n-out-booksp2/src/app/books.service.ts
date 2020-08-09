/**
 * Title: 5.3
 * Author: Zachary Dahir
 * Date: 8-05-20
 * Description: book service
 */

//import statements
import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  //create array of books
  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '0345379063',
        title: 'Legend',
        description: 'He is Druss the Legend. His skill in battle has earned him a fearsome reputation throughout the world and the stories of his life are told everywhere. But the grizzled veteran has spurned a life of fame and fortune and has retreated to the solitude of his mountain lair to await his old enemy, Death.',
        numOfPages: '432',
        authors: ['David Gemmell']
      },
      {
        isbn: '0345379071',
        title: 'Waylander',
        description: 'He would be hunted. He was certain to fail. But he must try, the old man commanded--commanded in the name of his son, the king, who had been slain by an assassin...Waylander was the most unlikely of heroes--for he was a traitor, the Slayer who had killed the king...',
        numOfPages: '310',
        authors: ['David Gemmell']
      },
      {
        isbn: '0345432347',
        title: 'Sword in the Storm',
        description: 'Fierce and proud, the Rigante dwell deep in the green mountain lands, worshiping the gods of air and water, and the spirits of the earth.  Among them lives a warrior who bears the mark of fate. Born of the storm that slew his father, he is Connavar, and tales of his courage spread like wildfire.',
        numOfPages: '438',
        authors: ['David Gemmell']
      },
      {
        isbn: '0439708184',
        title: 'Harry Potter and the Sorcerers Stone',
        description: 'Harry Potter has no idea how famous he is. Thats because hes being raised by his miserable aunt and uncle who are terrified Harry will learn that hes really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright.',
        numOfPages: '309',
        authors: ['J.K. Rowling']
      },
      {
        isbn: '0439139600',
        title: 'Harry Potter And The Goblet Of Fire',
        description: 'Harry Potter is midway through his training as a wizard and his coming of age. Harry wants to get away from the pernicious Dursleys and go to the International Quidditch Cup. He wants to find out about the mysterious event thats supposed to take place at Hogwarts this year, an event involving two other rival schools of magic, and a competition that hasnt happened for a hundred years.',
        numOfPages: '752',
        authors: ['J.K. Rowling']
      },
    ]
  }
  //function to return array of books
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  //function to return selected book
  getBook(isbn: string): IBook {
    for (let book of this.books){
      if (book.isbn === isbn){
        return book;
      }
    }
  }
}
