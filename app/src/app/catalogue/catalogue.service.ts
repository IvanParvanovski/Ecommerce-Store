import { Injectable } from "@angular/core";
import { IProduct } from "../shared/interfaces/product";

@Injectable({
    providedIn: 'root'
})
export class CatalogueService {
    products: IProduct[] | null = null;

    get catalogueProducts() {
        return this.products;
    }

    constructor() {
        this.products = [];
        this.addProducts();
    }

    addProducts() {
        
        this.products?.push(this.createProduct(
            '/assets/images/clothes/dress1.png', 
            'Top Women',
            'Angels malu zip jeans slim black used',
            139
        ));        

        this.products?.push(this.createProduct(
            '/assets/images/clothes/dress2.png', 
            'Top Women',
            'Angels malu zip jeans slim black used',
            139
        ));

        this.products?.push(this.createProduct(
            '/assets/images/clothes/dress3.png', 
            'Top Women',
            'Angels malu zip jeans slim black used',
            139
        ));

        this.products?.push(this.createProduct(
            '/assets/images/clothes/dress4.png', 
            'Top Women',
            'Angels malu zip jeans slim black used',
            139
        ));

        this.products?.push(this.createProduct(
            '/assets/images/clothes/dress5.png', 
            'Top Women',
            'Angels malu zip jeans slim black used',
            139
        ));

        this.products?.push(this.createProduct(
            '/assets/images/clothes/dress6.png', 
            'Top Women',
            'Angels malu zip jeans slim black used',
            139
        ));

        this.products?.push(this.createProduct(
            '/assets/images/clothes/dress7.png', 
            'Top Women',
            'Angels malu zip jeans slim black used',
            139
        ));

        this.products?.push(this.createProduct(
            '/assets/images/clothes/dress8.png', 
            'Top Women',
            'Angels malu zip jeans slim black used',
            139
        ));

        this.products?.push(this.createProduct(
            '/assets/images/clothes/dress5.png', 
            'Top Women',
            'Angels malu zip jeans slim black used',
            139
        ));

        this.products?.push(this.createProduct(
            '/assets/images/clothes/dress2.png', 
            'Top Women',
            'Angels malu zip jeans slim black used',
            139
        ));
    }

    createProduct(
        img: string, 
        title: string, 
        description: string, 
        price: number): IProduct {

        return { img, title, description, price};
    }
}