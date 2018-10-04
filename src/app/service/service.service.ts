import { Http,Headers, Response,RequestOptions } from '@angular/http';
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public ROOT_URL = 'http://localhost:3104';

  constructor(private http: Http) {}

  /** Product Functions */
  OnAddProduct(data){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3104/product/addprod",JSON.stringify(data), {headers:headers})
      .map(res => res.json());
  }

  getAllProduct(){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.ROOT_URL}/product/allprod`, {headers:headers})
      .map(res => res.json());
  }

  deleteOneProduct(data){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get("http://localhost:3104/product/delete/"+data.name, {headers:headers})
      .map(res => res.json());
  }

  viewOneProduct(data){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get("http://localhost:3104/product/view/"+data.name, {headers:headers})
      .map(res => res.json());
  }

  editOneProduct(data){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3104/product/edit",JSON.stringify(data), {headers:headers})
      .map(res => res.json());
  }


  /** Category Functions */
  OnAddCategory(data){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3104/product/addcat",JSON.stringify(data), {headers:headers})
      .map(res => res.json());
  }

  getAllCategory(){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get("http://localhost:3104/product/allcat", {headers:headers})
      .map(res => res.json());
  }

  getReport(){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get("http://localhost:3104/report", {headers:headers})
      .map(res => res.json());
  }
}
