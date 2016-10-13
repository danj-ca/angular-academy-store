import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.interface'

@Component({
    selector: "product-list",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"],
    providers: [ProductService]
})
export class ProductListComponent implements OnInit {
    title: string = "Products";
    products: IProduct[];
    selectedProduct: IProduct;
    message: string;
    
    constructor(private _productService: ProductService) {
        /* Don't access services in the constructor! 
           Who knows what they're doing.
           This is what an init event is for. 
        */
        //this.products = this._productService.getProducts();
    }

    onSelect(product: IProduct) {
        this.selectedProduct = product;
    }

    addFavourite(product: IProduct) {
        this.message = `Product ${product.name} added to favourites!`;
    }

    ngOnInit() {
        this.products = this._productService.getProducts();
    }
}