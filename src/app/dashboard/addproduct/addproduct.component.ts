import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../product';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private productsService :ProductsService) { }
  product=new Product()
  ngOnInit(): void {
  }
  insertdate(){
    this.productsService.insertdate(this.product).subscribe(data => {
      console.log('ok')
      });
    
    }
}
