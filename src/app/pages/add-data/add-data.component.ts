import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/Services/api.service';


@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  Firstform!: FormGroup


  // email!: string;
  // password!: string;
  // name!: string;
  // confirm_password!: string

  constructor(private formbuilder: FormBuilder, private dialogRef: MatDialogRef<AddDataComponent>, private http: HttpClient, private api: ApiService) { api.getName() }

  ngOnInit(): void {
    this.Firstform = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phoneNo: ['', Validators.required],
      ctc: ['', Validators.required]

    })

  }

  // public stored: any = { name: '', email: '', password: '', confirm_password: '' }

  AddData() {
    console.log(this.Firstform);
    this.api.addName(this.Firstform.value).subscribe((result) => {
      console.log(result);
    });


    // let bodyData = {
    //   "name": this.name,
    //   "email": this.email,
    //   "password": this.password,
    //   "confirm_password": this.confirm_password
    // };
    // this.http.post("http://localhost:3200/addUser", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
    //   console.log(resultData);
    //   alert("Added Successfully")
    // })
    this.dialogRef.close('SUBMIT')
  }


}




