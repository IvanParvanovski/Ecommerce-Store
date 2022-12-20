import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "../shared/interfaces/product";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CatalogueService {
    products: IProduct[] | null = [];

    get catalogueProducts() {
        return this.products;
    }

    constructor(
        private http: HttpClient
    ) {
        this.getProducts().subscribe(console.log);        
    }

    addProducts(products: any) {
        for (const key in products) {
            if (!!Number(key)) {
                const currentProduct = products[key];
                currentProduct.quantity = 0;
                this.products?.push(currentProduct);
            }
        }
    }

    // createProduct(
    //     img: string,
    //     title: string,
    //     description: string,
    //     price: number): IProduct {

    //     return { img, title, description, price, quantity: 0 };
    // }

    getProducts() {
        return this.http.get<any>(
            'https://ecommerce-store-9b470-default-rtdb.firebaseio.com/products.json'
        ).pipe(tap(val => this.addProducts(val)));
    }
}

