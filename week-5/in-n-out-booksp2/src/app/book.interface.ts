/**
 * Title: 5.3
 * Author: Zachary Dahir
 * Date: 8-05-20
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
