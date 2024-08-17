import { User } from "./User.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Filter } from "./configClasses.repository";
import { UserFile } from "./UserFile.model";

const productsUrl = "/api/products";
const suppliersUrl = "/api/suppliers";

@Injectable()
export class Repository {
    // product: Book = new Book();
    // products: Book[] =[];
    // suppliers: Supplier[] = [];
    // filter: Filter = new Filter();

    // constructor(private http: HttpClient) {
    //     this.filter.category = "Fantasy";
    //     this.filter.related = true;
    //     this.getProducts(true);
    // }
    // getProduct(id: number) {
    //     this.http.get<Book>(`${productsUrl}/${id}`)
    //     .subscribe(p => this.product = p);
    // }
    // getProducts(related = true) {
    //     let url = `${productsUrl}?category=${this.filter.category}&related=${related}`;
    //     // if (this.filter.category) {
    //     //     url += `&category=${this.filter.category}`;
    //     // }
    //     //this.http.get<Book[]>(url).subscribe(prods => this.products = prods)

    //     this.http.get<Book[]>(url).subscribe(prods => this.products = prods)
    // }

    // getSuppliers() {
    //     this.http.get<Supplier[]>(suppliersUrl)
    //     .subscribe(sups => this.suppliers = sups);
    // }
    // createProduct(prod: Book) {
    //     let data = { url: prod.url, name: prod.name, category: prod.category,  description: prod.description, price: prod.price,   supplier: prod.supplier ? prod.supplier.supplierId : 0  };
    //     this.http.post<number>(productsUrl, data).subscribe(id => { prod.BookId = id;  this.products.push(prod);});
    //     }
    // createProductAndSupplier(prod: Book, supp: Supplier) {
    //     let data = {
    //     name: supp.name, city: supp.city, state: supp.state
    //     };
    //     this.http.post<number>(suppliersUrl, data).subscribe(id => {
    //     supp.supplierId = id;
    //     prod.supplier = supp;
    //     this.suppliers.push(supp);
    //     if (prod != null) {
    //     this.createProduct(prod);
    //     }
    // });
    // }
    // replaceProduct(prod: Book) {
    //     let data = {
    //     url: prod.url,name: prod.name, category: prod.category,
    //     description: prod.description, price: prod.price,
    //     supplier: prod.supplier ? prod.supplier.supplierId : 0
    //     };
    //     this.http.put(`${productsUrl}/${prod.BookId}`, data)
    //     .subscribe(() => this.getProducts());
    // }
    // replaceSupplier(supp: Supplier) {
    // let data = {
    // name: supp.name, city: supp.city, state: supp.state
    // };
    // this.http.put(`${suppliersUrl}/${supp.supplierId}`, data)
    // .subscribe(() => this.getProducts());
    // }
    // updateProduct(id: number, changes: Map<string, any>) {
    // let patch: { op: string; path: string; value: any; }[] = [];
    // changes.forEach((value, key) =>
    // patch.push({ op: "replace", path: key, value: value }));
    // this.http.patch(`${productsUrl}/${id}`, patch)
    // .subscribe(() => this.getProducts());
    // }
    // deleteProduct(id: number) {
    // this.http.delete(`${productsUrl}/${id}`)
    // .subscribe(() => this.getProducts());
    // }
    // deleteSupplier(id: number) {
    // this.http.delete(`${suppliersUrl}/${id}`)
    // .subscribe(() => {
    // this.getProducts();
    // this.getSuppliers();
    // });
    // }
    // Update(){
    // this.http.delete("/api/route")
    // .subscribe(() => this.getProducts());
    // }
}
