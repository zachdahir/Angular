/**
 * Title: composer.class.ts
 * Author: Zachary Dahir
 * Date: 7-21-20
 * Description: Composer class component
 */

 //import
import { IComposer } from './composer.interface'
export class Composer {
  composers: Array<IComposer>;

//composer constructor
  constructor(){
    this.composers = [
      {
        composerId: 100, fullName: 'Claude Debussey', genre: 'Classical'
      },
      {
        composerId: 101, fullName: 'Ludovico Einaudi', genre: 'Contemporary'
      },
      {
        composerId: 102, fullName: 'Yann Tiersen', genre: 'Avant-garde'
      },
      {
        composerId: 103, fullName: 'Hans Zimmer', genre: 'Film-Score'
      },
      {
        composerId: 104, fullName: 'Fredric Chopin', genre: 'Classical'
      }
    ]
  }

  getComposers(){
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers){
      if (composer.composerId === composerId){
        return composer;
      }
    }
  }
}
