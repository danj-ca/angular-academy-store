import { FavouritesService, ProductService, IProduct } from './';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: "product-list",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"],
    providers: [ProductService, FavouritesService]
})
export class ProductListComponent implements OnInit {
    title: string = "Products";
    products: IProduct[];
    selectedProduct: IProduct;
    message: string;
    
    constructor(private _productService: ProductService,
                private _favouritesService: FavouritesService) {
        /* Don't access services in the constructor! 
           Who knows what they're doing.
           This is what an init event is for. 
        */
        //this.products = this._productService.getProducts();
    }

    onSelect(product: IProduct) {
        this.selectedProduct = product;
    }

    favouriteAdded(product: IProduct) {
        this.message = `Product ${product.name} added to favourites!`;
    }

    ngOnInit() {
        this._productService.getProducts()
                .subscribe(
                    data => this.products = data,
                    error => console.log(error)
                );
    }

    get favouritesCount() : number {
        return this._favouritesService.favouritesCount;
    }
}