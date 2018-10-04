import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/index'


@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  rForm: FormGroup;
  title:String="";
  response:any;
  code;any;
  loading: boolean = false;
  submitted: boolean = false;

  constructor(private fb: FormBuilder,public service:ServiceService) {
    /** Form Group*/
      this.rForm = fb.group({
        'title': [null, Validators.required],
        'category': [null, Validators.required],
      });
     }

  ngOnInit() {
  }

  addCategory(event){
    this.submitted = true;

    // stop here if form is invalid
    if (this.rForm.invalid) {
        return;
    }

    this.loading = true;

    var data = {
      "name": event.title
    }

    this.service.OnAddCategory(data).subscribe(res=>{
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
