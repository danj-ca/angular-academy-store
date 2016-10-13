import { FavouritesService } from './favourites.service';
import { IProduct } from './product.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    /* moduleId: module.id, - this is only needed if using System.js,
                               but we're using WebPack */
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    /* This reminds me of models in MVVM... I suppose components
        are a little like VMs?

        Note - Input is needed if we want to be able to 
        property bind to product
    */
    @Input() product: IProduct;
    @Output() favourited: EventEmitter<IProduct> = new EventEmitter<IProduct>();

    constructor(private _favouritesService: FavouritesService) { }

    ngOnInit() { }

    addToFavourites()
    {
        /* Since the favourites list exists outside the context of
           a single product, we need to emit an event that our
           product list can subscribe to.

           Note - Generic type of favourited specific the type of 
           argument expected by emit().

           Note - We can still emit an event, for example so a message
           can be displayed, although that might also be more appropriate
           to live in the FavouritesService...
        */
        this.favourited.emit(this.product);
        this._favouritesService.addFavourite(this.product);
    }
}