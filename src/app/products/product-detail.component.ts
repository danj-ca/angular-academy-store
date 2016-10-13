import { IProduct } from './product.interface';
import { Component, OnInit } from '@angular/core';

@Component({
    /* moduleId: module.id, - this is only needed if using System.js,
                               but we're using WebPack */
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    /* This reminds me of models in MVVM... I suppose components
        are a little like VMs? */
    product: IProduct;

    constructor() { }

    ngOnInit() { }
}