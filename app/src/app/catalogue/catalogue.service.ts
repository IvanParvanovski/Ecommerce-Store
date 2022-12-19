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
                this.products?.push(products[key]);
            }
        }

        // this.products?.push(this.createProduct(
        //     '/assets/images/clothes/dress3.png', 
        //     'Top Women',
        //     'Angels malu zip jeans slim black used',
        //     139
        // ));

        // this.products?.push(this.createProduct(
        //     '/assets/images/clothes/dress4.png', 
        //     'Top Women',
        //     'Angels malu zip jeans slim black used',
        //     139
        // ));

        // this.products?.push(this.createProduct(
        //     '/assets/images/clothes/dress5.png', 
        //     'Top Women',
        //     'Angels malu zip jeans slim black used',
        //     139
        // ));

        // this.products?.push(this.createProduct(
        //     '/assets/images/clothes/dress6.png', 
        //     'Top Women',
        //     'Angels malu zip jeans slim black used',
        //     139
        // ));

        // this.products?.push(this.createProduct(
        //     '/assets/images/clothes/dress7.png', 
        //     'Top Women',
        //     'Angels malu zip jeans slim black used',
        //     139
        // ));

        // this.products?.push(this.createProduct(
        //     '/assets/images/clothes/dress8.png', 
        //     'Top Women',
        //     'Angels malu zip jeans slim black used',
        //     139
        // ));

        // this.products?.push(this.createProduct(
        //     '/assets/images/clothes/dress5.png', 
        //     'Top Women',
        //     'Angels malu zip jeans slim black used',
        //     139
        // ));

        // this.products?.push(this.createProduct(
        //     '/assets/images/clothes/dress2.png', 
        //     'Top Women',
        //     'Angels malu zip jeans slim black used',
        //     139
        // ));
    }

    createProduct(
        img: string,
        title: string,
        description: string,
        price: number): IProduct {

        return { img, title, description, price, quantity: 0 };
    }

    getProducts() {
        return this.http.get<any>(
            'https://ecommerce-store-9b470-default-rtdb.firebaseio.com/products.json'
        ).pipe(tap(val => this.addProducts(val)));
    }
}

