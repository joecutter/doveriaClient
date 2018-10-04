import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/index'


@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

rForm: FormGroup;
title:String="";
category:String="";
cat:any;
loading: boolean = false;
submitted: boolean = false;
response:any;
code:any;


  constructor(private fb: FormBuilder,public service:ServiceService) {
    /** Form Group*/
      this.rForm = fb.group({
        'title': [null, Validators.required],
        'category': [null, Validators.required],
      });
     }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory(){
    this.service.getAllCategory().subscribe(res=>{
      console.log(res);
      this.cat = res.data;
  })
}

   addProduct(post){
     this.submitted = true;

     // stop here if form is invalid
     if (this.rForm.invalid) {
         return;
     }

    this.loading = true;

    var data = {
      "name": post.title,
      "category":post.category
    }

    this.service.OnAddProduct(data).subscribe(res=>{
      this.loading = false
      console.log(res);
      if(res.code === 300){
        this.code = "300";
        this.response = res.data;
      }else if(res.code === 200){
        this.code = "200";
        this.response = "Category Added Successfully";
      }else{
        this.code = "400";
        this.response = "An Error Occurred, Please Try Again";
      }
    })
 }


}
