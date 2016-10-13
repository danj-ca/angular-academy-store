import { IProduct } from './product.interface';
import { Injectable } from '@angular/core';

/* A service to manage a list of favourite products */
@Injectable()
export class FavouritesService {

    favourites: IProduct[] = [];

    constructor() { }

    addFavourite(product: IProduct) {
        // TODO use a set instead of an array
        this.favourites.push(product);
    }

    // TODO Can we implement a remove method?

    // Note - this is typescript's property getter syntax
    // Get in the habit of adding the return type annotation
    get favouritesCount() : number {
        return this.favourites.length;
    }
}