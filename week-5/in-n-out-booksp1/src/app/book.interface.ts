/**
 * Title: 5.1
 * Author: Zachary Dahir
 * Date: 8-03-20
 * Description: book interface
 */

//IBook interface
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: string;
  authors: Array<string>;
}
