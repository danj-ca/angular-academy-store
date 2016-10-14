import { IProduct } from './';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

    private productsEndpoint: string = "http://storerestservice.azurewebsites.net/api/products/";
    private products: IProduct[];

    constructor(private _http: Http) { }

    // Note - I'm still not sure about this return type annotation...
    getProducts(): Observable<IProduct[] | any> {
        if (this.products) {
            // Return from local cache
            return Observable.of(this.products);
        } else {
            return this._http
                    .get(this.productsEndpoint)
                    .map((r:Response) => {
                            this.products = r.json();
                            return this.products;
                        })
                    .catch(this.handleErrors);
        }
    }

    handleErrors(error) {
        console.log(error);
        return Observable.throw(error);
    }
}