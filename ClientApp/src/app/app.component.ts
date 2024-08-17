import { Component } from '@angular/core';
import { Repository } from "./models/repository";
import { User } from "./models/User.model";
import { UserFile } from "./models/UserFile.model";


  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   constructor(private repo: Repository) { }
//     get product(): Book {
//     return this.repo.product;
//   }
//  get products(): Book[] {
//   return this.repo.products;
//   }
//   createProduct() {
//     this.repo.createProduct(new Book(0,"https://www.wydawnictwoalbatros.com/wp-content/uploads/2019/09/instytut-twarda-płaska.png", "institute", "Fantasy", "A novel by American writer Stephen King. Published on September 10, 2019", 49.99, this.repo.products[0].supplier));
//   }
//   createProductAndSupplier() {
//     let s = new Supplier(0, "Rocket Shoe Corp", "Boston", "MA");
//     let p = new Book(0,"https://www.wydawnictwoalbatros.com/wp-content/uploads/2019/09/instytut-twarda-płaska.png",  "institute", "Fantasy", "A novel by American writer Stephen King. Published on September 10, 2019", 100, s);
//     this.repo.createProductAndSupplier(p, s);
//   }
//   replaceProduct() {
//     let p = this.repo.products[0];
//     p.name = "Modified Product";
//     p.category = "Modified Category";
//     this.repo.replaceProduct(p);
//   }
//   replaceSupplier() {
//     let s = new Supplier(3, "Modified Supplier", "New York", "NY");
//     this.repo.replaceSupplier(s);
//   }
//   updateProduct() {
//     let changes = new Map<string, any>();
//     changes.set("name", "Green Kayak");
//     changes.set("supplier", null);
//     this.repo.updateProduct(10, changes);
//   }
//   deleteProduct() {
//     this.repo.deleteProduct(11);
//   }
//   deleteSupplier() {
//     this.repo.deleteSupplier(1);
//   }
//   getUrl(x : number) : string{
//     let url = "http://localhost:5000/Home/Icons/" + x;
//     console.log(url);
//     return url
//   }
//   public filter:string = "";  
//   updateBook(){
//     this.repo.filter.category = this.filter;
//     this.repo.getProducts();
//   }
//   Update(){
//     this.repo.Update();
//   }
}
