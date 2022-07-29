import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatogeryService {

  constructor(private http: HttpClient) { }
  getcategoriesList() {
    return this.http.get('http://127.0.0.1:8000/api/categories');
  }
  deletecategory(id: any){
    return this.http.delete('http://127.0.0.1:8000/api/categories/'+id);
  }
  insertdate(data: any){
    return this.http.post('http://127.0.0.1:8000/api/categories',data);
  }
  getData(id:any){
    return this.http.get('http://127.0.0.1:8000/api/categories/'+id);
  }
  updatecategory(id: any,data:any){
    return this.http.put('http://127.0.0.1:8000/api/categories/'+id,data);
  }
}
