import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/index'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  rForm: FormGroup;
  product:String="";
  category:String="";
  active:any;
  response:any;
  item:any;
  code;
  id:any;
  date:any;
  responseCode:any;
  editCode:any;

  constructor(private fb: FormBuilder,public service:ServiceService) {
    /** Form Group*/
      this.rForm = fb.group({
        'product': [null, Validators.required],
        'category': [null, Validators.required],
      });
   }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct(){
    this.service.getAllProduct().subscribe(res=>{
      console.log(res);
      this.active = res.data;
  })
}

openModal(event){
   console.log("select item "+event);
   var data = {
     "name":event
   }
  this.service.viewOneProduct(data).subscribe(res=>{
    console.log(res);
    this.id = res.data._id;
    this.product = res.data.name;
    this.category = res.data.category;
    this.date = res.data.dateCreated;

  })
}

edit(event){
   console.log("select item "+event);
   var data = {
     "id":this.id,
     "product":event.product,
     "category":event.category,
     "dateCreated":this.date
   }

   console.log(data)
  this.service.editOneProduct(data).subscribe(res=>{
    console.log(res);

    if(res.code === 200){
       this.responseCode = "Producted Updated successfully";
       this.editCode = 200;
       this.product = res.data.name;
       this.category = res.data.category;
    }else{
       this.responseCode = "Error Occurred";
    }

    this.getAllProduct()

  })
}

delete(event){
   console.log("select item "+event);
   var data = {
     "name":event
   }
  this.service.deleteOneProduct(data).subscribe(res=>{
    console.log(res);
    var item;
    var code;
    if(res.data.message === "Item successfully deleted"){
       item = res.data.message;
       code = 200
    }else{
      item = "Item not successfully deleted";
      code = 400
    }
    this.reload(item,code)
  })
}

reload(item,code){
  this.service.getAllProduct().subscribe(res=>{
    console.log(res);
    this.code = code
    this.response = item
    this.active = res.data;
})
}

}
