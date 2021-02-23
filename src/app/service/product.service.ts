import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    { id : 1, title: 'ABC', decription: ''}
  ]

  constructor() { }
}
// test
