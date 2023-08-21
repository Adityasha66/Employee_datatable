import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { DATA1Component } from '../data1/data1.component';

@Component({
  selector: 'app-edit-data1',
  templateUrl: './edit-data1.component.html',
  styleUrls: ['./edit-data1.component.css']
})
export class EditData1Component implements OnInit {

  constructor(private formbuilder: FormBuilder, private matDialog: MatDialogRef<DATA1Component>, private route: ActivatedRoute, private api: ApiService, @Inject(MAT_DIALOG_DATA) private data: any) { }

  SUBMIT: string = "Add"

  Firstform!: FormGroup


  allDetails: any = []
  getData: any = []

  ngOnInit(): void {
    this.Firstform = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phoneNo: ['', Validators.required],
      ctc: ['', Validators.required]

    })
    if (this.data) {
      this.SUBMIT = "Update"
      this.Firstform.controls['name'].setValue(this.data.name)
      this.Firstform.controls['email'].setValue(this.data.email)
      this.Firstform.controls['address'].setValue(this.data.address)
      this.Firstform.controls['phoneNo'].setValue(this.data.phoneNo)
      this.Firstform.controls['ctc'].setValue(this.data.ctc)
    }
  }

  addInfo() {
    if (!this.data) {
      this.api.addName(this.Firstform.value).subscribe({
        next: (res) => {
          console.log(res)
          this.matDialog.close('ADD')
        },
        error: (err) => {
          console.log(err)
        }
      })
      // console.log(data);
      // this.allDetails.push(this.Firstform.value)
      // var final = localStorage.setItem('data', JSON.stringify(this.allDetails))
    }
    else {
      this.updateInfo()
    }
  }

  updateInfo() {
    this.api.updateName(this.Firstform.value, this.data._id).subscribe({
      next: (res) => {
        console.log(res)
        this.matDialog.close('Update')
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
