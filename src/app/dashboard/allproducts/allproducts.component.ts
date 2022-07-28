import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  products : Array<any> = [];
  constructor(private productsService :ProductsService) { }

  ngOnInit(): void {
    this.getallproducts()
  }
  getallproducts(){
    this.productsService.getProductsList().subscribe((data : any) => {
      this.products =data.data.products ;
      console.log(data.data.products)
      });
  }

}
