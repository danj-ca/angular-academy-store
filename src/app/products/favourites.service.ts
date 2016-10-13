import { IProduct } from './product.interface';
import { Injectable } from '@angular/core';

/* A service to manage a list of favourite products */
@Injectable()
export class FavouritesService {

    favourites: Set<IProduct> = new Set();

    constructor() { }

    addFavourite(product: IProduct) {
        // TODO use a set instead of an array
        this.favourites.add(product);
    }

    // TODO Can we implement a remove method?

    // Note - this is typescript's property getter syntax
    // Get in the habit of adding the return type annotation
    get favouritesCount() : number {
        return this.favourites.size;
    }

    isFavourite(product: IProduct) : boolean {
        return this.favourites.has(product);
    }
}