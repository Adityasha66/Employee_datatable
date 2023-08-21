import { Component, OnInit, } from '@angular/core';
import { MatDialog, MatDialogRef, _MatDialogContainerBase } from '@angular/material/dialog';
import { AddDataComponent } from '../add-data/add-data.component';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';
import { EditData1Component } from '../edit-data1/edit-data1.component';
import { DeletedataComponent } from '../deletedata/deletedata.component';

@Component({
  selector: 'app-data1',
  templateUrl: './data1.component.html',
  styleUrls: ['./data1.component.css'],

})
export class DATA1Component implements OnInit {

  data: any = []

  constructor(private matDialog: MatDialog, private route: ActivatedRoute, private api: ApiService,) { }

  ngOnInit(): void {
    this.getData()
  }

  openDialog() {
    this.matDialog.open(AddDataComponent, {
      width: '20.5%',
      height: '82%'
    }).afterClosed().subscribe((result) => {
      if (result == 'SUBMIT') {
        this.getData()
      }
    })
  }

  updateInfo(data: any) {
    this.matDialog.open(EditData1Component, {
      data,
    }).afterClosed().subscribe((result) => {
      if (result == 'Update') {
        this.getData()
      }
    })
  }

  deleteInfo(data: any) {
    this.api.deleteName(data).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'error',
          title: 'Deleted',
          text: 'Deleted Successfully!!'
        })
        this.getData()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getData() {
    this.api.getName().subscribe((data) => {
      this.data = data;
      console.log(data);
    })
  }

  // opendel() {
  //   this.matDialog.open(DeletedataComponent, {
  //     width: '20.5%',
  //     height: '82%'
  //   }).afterClosed()
  // }
}

