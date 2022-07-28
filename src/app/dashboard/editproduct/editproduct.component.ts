import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../product';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  id:any;
  data:any;
  product=new Product()
  constructor(private productsService :ProductsService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getDatabyid();
  }
  getDatabyid(){
    this.productsService.getData(this.id).subscribe(res=>{
      this.data=res;
      this.product=this.data.data
    })
  }
  updateproduct(){
    this.productsService.updateproduct(this.id,this.product).subscribe(res=>{
      console.log(res)
    })
  }
  

}
