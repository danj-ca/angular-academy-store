import { IProduct } from './';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

    productsEndpoint: string = "http://storerestservice.azurewebsites.net/api/products/";

    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {
        return this._http
                   .get(this.productsEndpoint)
                   .map((r:Response) => r.json());
    }
}